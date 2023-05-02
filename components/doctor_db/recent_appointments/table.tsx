'use client';
import Link from 'next/link';
import Router, { useRouter } from 'next/navigation';

export default function RecentAppointments(props: any) {
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
                {props.data.map((item: any) => (
                  <tr key={item.id}>
                    <td className="border-t py-5 px-4 pl-11">
                      <h5 className="text-body-color text-sm font-medium">
                        {item.fullName}
                      </h5>
                    </td>
                    <td className="border-t py-5 px-4">
                      <p className="text-body-color text-sm">
                        {item.condition}
                      </p>
                    </td>
                    <td className="border-t py-5 px-4">
                      <p className="text-body-color text-sm">{item.schedule}</p>
                    </td>
                    <td className="border-t py-5 px-4">
                      <p className="text-body-color text-sm">{item.status}</p>
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
                          <option value={item.id}>Link</option>
                          <option value="2">Link</option>
                          <option value="3">Link</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
