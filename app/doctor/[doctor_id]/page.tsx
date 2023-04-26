'use client';
import { useEffect, useState } from 'react';
import { findOneDoctor } from '../../../api/findOneDoctor';
import PastAppointmentsDoctorTable from '../../../components/doctor/appointments/past';
import RecentAppointmentsDoctor from '../../../components/doctor/appointments/recent';
import PastPrescriptionsDoctor from '../../../components/doctor/prescriptions/past';

interface pageProps {
  params: { doctor_id: string };
}

export default function Page({ params }: pageProps) {
  const doctor_id = params.doctor_id;
  const jwtToken = localStorage.getItem('jwtToken');
  const [doctor, setDoctor] = useState<any>();

  useEffect(() => {
    if (!jwtToken) {
      window.location.href = '/login';
    } else {
      findOneDoctor(doctor_id).then((response) => {
        setDoctor(response.doctors.data[0]);
      });
    }
  }, []);

  return (
    <div className="py-16 px-16">
      <div className="">
        <p className="text-4xl font-black">
          Welcome, {doctor?.attributes?.fullName} 👋
        </p>
        <p className="text-body-color">{doctor?.attributes?.address}</p>
        <div className="flex flex-row">
          <div className="mt-6 w-full">
            <div className="grid grid-cols-2 gap-12">
              <div className="w-full">
                <RecentAppointmentsDoctor
                  doctor_id={doctor_id}
                  jwtToken={jwtToken || ''}
                />
              </div>
              <div className="w-full">
                <PastPrescriptionsDoctor
                  doctor_id={doctor_id}
                  jwtToken={jwtToken || ''}
                />
              </div>
            </div>
            {/* <div>
              <p className="text-xl font-semibold py-4">Past Appointments</p>
              <PastAppointmentsDoctorTable
                doctor_id={doctor_id}
                jwtToken={jwtToken || ''}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
