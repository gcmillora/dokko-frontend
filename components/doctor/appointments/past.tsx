'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { findPastAppointmentsDoctor } from '../../../query/doctor/findPastAppointmentsDoctor';

export default function PastAppointmentsDoctorTable({
  doctor_id,
  jwtToken,
}: {
  doctor_id: string;
  jwtToken: string;
}) {
  const [pastAppointments, setpastAppointments] = useState([]);
  useEffect(() => {
    if (!jwtToken) return;
    findPastAppointmentsDoctor(doctor_id, jwtToken).then((data) => {
      setpastAppointments(data.appointments.data);
    });
  }, []);

  return (
    <div className="mx-auto ">
      <div className="rounded-lg border border-stroke bg-white">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto rounded-lg">
            <thead>
              <tr className="border-b border-stroke">
                <th className="w-1/3 py-5 pr-4 pl-9">
                  <p className="text-left text-base font-medium text-black">
                    Name
                  </p>
                </th>
                <th className="w-1/3 py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Type of Visit
                  </p>
                </th>
                <th className=" py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Date
                  </p>
                </th>
                <th className="py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Condition
                  </p>
                </th>
                <th className="py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Prescription
                  </p>
                </th>
                <th className="py-5 pl-4 pr-9">
                  <p className="text-right text-base font-medium text-black"></p>
                </th>
              </tr>
            </thead>

            <tbody>
              {pastAppointments.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="border-b border-stroke hover:bg-[#F5F5F5]"
                >
                  <td className="py-6 pr-4 pl-9">
                    <h5 className="text-base font-medium text-body-color">
                      {item?.attributes?.patient?.data?.attributes?.fullName}
                    </h5>
                  </td>
                  <td className="py-6 px-4">
                    <h5 className="text-base font-medium text-body-color">
                      {item?.attributes?.typeOfVisit}
                    </h5>
                  </td>
                  <td className="py-6 px-4">
                    <p className="text-base text-body-color">
                      {new Date(
                        item.attributes.appointmentDate
                      ).toLocaleString()}
                    </p>
                  </td>
                  <td className="py-6 px-4">
                    <p className="text-base text-body-color">
                      {item?.attributes?.condition}
                    </p>
                  </td>
                  <td className="py-6 px-4">
                    <Link
                      href={`/patient/${item.attributes.patient.data.attributes.uid}/appointments/${item.attributes.uid}`}
                    >
                      View
                    </Link>
                  </td>
                  <td className="py-6 pl-4 pr-9 text-right">
                    <button className="inline-flex items-center justify-center rounded border border-primary py-2 px-4 text-base font-medium text-primary hover:bg-primary hover:text-white">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
