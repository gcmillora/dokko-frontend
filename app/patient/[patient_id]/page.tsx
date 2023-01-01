'use client';

import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { uuid, isUuid } from 'uuidv4';
import { findOnePatient } from '../../../api/findOnePatient';
import { findPastAppointments } from '../../../api/findPastAppointmentsPatient';
import { findPrescriptions } from '../../../api/findPrescriptionsPatients';
import { findUpcomingAppointments } from '../../../api/findUpcomingAppointmentsPatients';

import AppointmentCard from '../../../components/patient/appointment/card';
import CreateAppointmentCard from '../../../components/patient/appointment/create_card';
import PastAppointmentsTable from '../../../components/patient/appointment/past_appointments';
import PrescriptionCard from '../../../components/patient/prescription/card';

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
        setPatient(data.patients.data[0].attributes);
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
    <div className="py-16 px-24">
      <div className="">
        <p className="text-body-color text-4xl font-bold">
          Welcome, {patient.fullName}
        </p>
        <p className="text-body-color">{patient.address}</p>
        <div className="flex flex-row">
          <div className="mt-6">
            <div className="grid grid-cols-3 gap-12">
              <div className="w-96">
                <p className="text-xl text-body-color font-semibold py-4">
                  Prescriptions
                </p>
                <PrescriptionCard data={prescriptions} />
              </div>
              <div className="">
                <p className="text-xl text-body-color font-semibold py-4 w-96">
                  Upcoming Appointments
                </p>

                <AppointmentCard data={upcomingApp} />
              </div>
              <div>
                <p className="text-xl text-body-color font-semibold py-4">
                  Book Appointment
                </p>
                <CreateAppointmentCard patient_id={params.patient_id} />
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xl text-body-color font-semibold py-4">
                Past Appointments
              </p>
              {pastApp.length === 0 ? (
                <p className="text-body-color">No past appointments</p>
              ) : (
                <PastAppointmentsTable data={pastApp} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
