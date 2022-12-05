'use client';
import Link from 'next/link';
import Router, { useRouter } from 'next/navigation';

export default function RecentAppointments() {
  const router = useRouter();
  function actionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.push(`/doctor/request/${e.target.value}`);
  }
  return (
    <div className="container">
      <div className="text-2xl px-3 py-6 p font-semibold">
        Recent Appointments
      </div>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="max-w-full overflow-x-auto rounded-xl shadow-lg">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-primary text-left">
                  <th className="min-w-[280px] py-4 pr-4 pl-11 text-base font-semibold text-white">
                    Name
                  </th>
                  <th className="min-w-[280px] py-4 px-4 text-base font-semibold text-white">
                    Condition
                  </th>
                  <th className="min-w-[250px] py-4 px-4 text-base font-semibold text-white">
                    Schedule
                  </th>
                  <th className="min-w-[140px] py-4 px-4 text-base font-semibold text-white">
                    Status
                  </th>
                  <th className="min-w-[140px] py-4 pr-11 pl-4 text-right text-base font-semibold text-white">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t py-5 px-4 pl-11">
                    <h5 className="text-body-color text-sm font-medium">
                      Musharof Chowdhury
                    </h5>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      Multidisciplinary Web Entrepreneur
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      musharof@example.com
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">Owner</p>
                  </td>
                  <td className="border-t py-5 px-4 pr-11 text-center">
                    <div className="relative">
                      <select
                        className="shadow-card text-body-color appearance-none rounded border-0 bg-white py-[6px] pl-3 pr-8 text-sm font-semibold outline-none"
                        onChange={actionChange}
                      >
                        <option value="" selected disabled>
                          Action
                        </option>
                        <option value="1">Link</option>
                        <option value="">Delete</option>
                        <option value="">Details</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-t py-5 px-4 pl-11">
                    <h5 className="text-body-color text-sm font-medium">
                      Naimur Rahman
                    </h5>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      Website Front-end Developer
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      naimurrahman@example.com
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">Member</p>
                  </td>
                  <td className="border-t py-5 px-4 pr-11 text-center">
                    <div className="relative">
                      <select className="shadow-card text-body-color appearance-none rounded border-0 bg-white py-[6px] pl-3 pr-8 text-sm font-semibold outline-none">
                        <option value="" selected disabled>
                          Action
                        </option>
                        <option value="">Edit</option>
                        <option value="">Delete</option>
                        <option value="">Details</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-t py-5 px-4 pl-11">
                    <h5 className="text-body-color text-sm font-medium">
                      Shafiq Hammad
                    </h5>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      Regional Paradigm Technician
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      shafiq.hd@example.com
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">Moderator</p>
                  </td>
                  <td className="border-t py-5 px-4 pr-11 text-center">
                    <div className="relative">
                      <select className="shadow-card text-body-color appearance-none rounded border-0 bg-white py-[6px] pl-3 pr-8 text-sm font-semibold outline-none">
                        <option value="" selected disabled>
                          Action
                        </option>
                        <option value="">Edit</option>
                        <option value="">Delete</option>
                        <option value="">Details</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-t py-5 px-4 pl-11">
                    <h5 className="text-body-color text-sm font-medium">
                      Alex Semuyel
                    </h5>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      Applications Engineer
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      alex.semuel@example.com
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">Admin</p>
                  </td>
                  <td className="border-t py-5 px-4 pr-11 text-center">
                    <div className="relative">
                      <select className="shadow-card text-body-color appearance-none rounded border-0 bg-white py-[6px] pl-3 pr-8 text-sm font-semibold outline-none">
                        <option value="" selected disabled>
                          Action
                        </option>
                        <option value="">Edit</option>
                        <option value="">Delete</option>
                        <option value="">Details</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-t py-5 px-4 pl-11">
                    <h5 className="text-body-color text-sm font-medium">
                      Sulium Keliym
                    </h5>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      Lead Implementation Liaison
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      suliym.info@example.com
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">Member</p>
                  </td>
                  <td className="border-t py-5 px-4 pr-11 text-center">
                    <div className="relative">
                      <select className="shadow-card text-body-color appearance-none rounded border-0 bg-white py-[6px] pl-3 pr-8 text-sm font-semibold outline-none">
                        <option value="" selected disabled>
                          Action
                        </option>
                        <option value="">Edit</option>
                        <option value="">Delete</option>
                        <option value="">Details</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="border-t py-5 px-4 pl-11">
                    <h5 className="text-body-color text-sm font-medium">
                      Devid Deekook
                    </h5>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      Central Security Manager
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">
                      devid.decok@example.com
                    </p>
                  </td>
                  <td className="border-t py-5 px-4">
                    <p className="text-body-color text-sm">Moderator</p>
                  </td>
                  <td className="border-t py-5 px-4 pr-11 text-center">
                    <div className="relative">
                      <select className="shadow-card text-body-color appearance-none rounded border-0 bg-white py-[6px] pl-3 pr-8 text-sm font-semibold outline-none">
                        <option value="" selected disabled>
                          Action
                        </option>
                        <option value="">Edit</option>
                        <option value="">Delete</option>
                        <option value="">Details</option>
                      </select>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
