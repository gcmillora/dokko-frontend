import Link from 'next/link';

export default function PastAppointmentsTable({ data }: any) {
  console.log(data);

  return (
    <div className="mx-auto ">
      <div className="rounded-lg border border-stroke bg-white">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto rounded-lg">
            <thead>
              <tr className="border-b border-stroke">
                <th className="min-w-[260px] py-5 pr-4 pl-9">
                  <p className="text-left text-base font-medium text-black">
                    Doctor
                  </p>
                </th>
                <th className="min-w-[260px] py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Specialty
                  </p>
                </th>
                <th className="min-w-[160px] py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Date
                  </p>
                </th>
                <th className="min-w-[170px] py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Condition
                  </p>
                </th>
                <th className="min-w-[150px] py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Prescription
                  </p>
                </th>
                <th className="min-w-[200px] py-5 pl-4 pr-9">
                  <p className="text-right text-base font-medium text-black"></p>
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="border-b border-stroke hover:bg-[#F5F5F5]"
                >
                  <td className="py-6 pr-4 pl-9">
                    <h5 className="text-base font-medium text-body-color">
                      {item?.attributes?.doctor?.data?.attributes?.fullName}
                    </h5>
                  </td>
                  <td className="py-6 px-4">
                    <h5 className="text-base font-medium text-body-color">
                      {item?.attributes?.doctor?.data?.attributes?.speciality}
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
                      href={`/patient/${item.attributes.patient.data.attributes.uid}/prescriptions/${item.attributes.uid}`}
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
