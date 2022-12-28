'use client';

import { use, useEffect, useState } from 'react';
import { findOnePatient } from '../../../api/findOnePatient';
import { findPastAppointments } from '../../../api/findPastAppointments';
import { findPrescriptions } from '../../../api/findPrescriptions';
import { findUpcomingAppointments } from '../../../api/findUpcomingAppointments';

import AppointmentCard from '../../../components/patient/appointment/card';
import CreateAppointmentCard from '../../../components/patient/appointment/create_card';
import PastAppointmentsTable from '../../../components/patient/appointment/past_appointments';
import PrescriptionCard from '../../../components/patient/prescription/card';

import { Patient } from '../../../utils/types';

interface pageProps {
  params: { patient_id: string };
}
interface prescriptionsProps {
  prescriptions: [];
}

export default function Page({ params }: pageProps) {
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const [prescriptions, setPrescriptions] = useState([]);
  const [upcomingApp, setUpcomingApp] = useState([]);
  const [pastApp, setPastApp] = useState([]);

  useEffect(() => {
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
              <PastAppointmentsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}