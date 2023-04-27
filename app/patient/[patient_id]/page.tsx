'use client';

import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { uuid, isUuid } from 'uuidv4';
import { findOnePatient } from '../../../query/findOnePatient';
import { findPastAppointments } from '../../../query/patient/findPastAppointmentsPatient';
import { findPrescriptions } from '../../../query/patient/findPrescriptionsPatients';
import { findUpcomingAppointments } from '../../../query/patient/findUpcomingAppointmentsPatients';

import AppointmentCard from '../../../components/patient/appointment/card';
import CreateAppointmentCard from '../../../components/patient/appointment/create_card';
import PastAppointmentsTable from '../../../components/patient/appointment/past_appointments';
import PrescriptionCard from '../../../components/patient/prescription/card';
import showToastMessage from '../../../utils/error';

import { Patient } from '../../../utils/types';
import { validateUser } from '../../../utils/validateUser';

interface pageProps {
  params: { patient_id: string };
}

export default function Page({ params }: pageProps) {
  const router = useRouter();

  const [patient, setPatient] = useState<Patient>({} as Patient);
  const [prescriptions, setPrescriptions] = useState([]);
  const [upcomingApp, setUpcomingApp] = useState([]);
  const [pastApp, setPastApp] = useState([]);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    if (isUuid(params.patient_id)) {
      findOnePatient(params.patient_id).then((data) => {
        if (data.patients.data.length === 0) {
          showToastMessage('error', 'Invalid Patient ID');
          setTimeout(() => {
            router.push('/login');
          }, 2000);
        } else setPatient(data.patients.data[0].attributes);
      });
      findPrescriptions(params.patient_id).then((data) => {
        setPrescriptions(data.prescriptions.data);
      });
      findUpcomingAppointments(params.patient_id).then((data) => {
        setUpcomingApp(data.appointments.data);
      });
      findPastAppointments(params.patient_id).then((data) => {
        setPastApp(data.appointments.data);
      });
    } else {
      alert('Invalid Patient ID');
    }
  }, []);

  return (
    <div className="py-16 px-16">
      <div className="">
        <p className="text-4xl font-black">Welcome, {patient.fullName}</p>
        <p className="text-body-color">{patient.address}</p>
        <div className="flex flex-row">
          <div className="mt-4  ">
            <div className="grid grid-cols-3 gap-12">
              <div className="w-full h-full  ">
                <PrescriptionCard data={prescriptions} />
              </div>
              <div className="w-full">
                <AppointmentCard data={upcomingApp} />
              </div>
              <div className="w-full h-full">
                <CreateAppointmentCard patient_id={params.patient_id} />
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xl  font-semibold py-4">Past Appointments</p>
              {pastApp.length === 0 ? (
                <p className="text-body-color">No past appointments</p>
              ) : (
                <PastAppointmentsTable data={pastApp} />
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
