import { useRouter } from 'next/navigation';

export default function AppointmentCard({ data }: any) {
  const router = useRouter();

  const goToAppointment =
    (patient_uid: string, uid: string) => (event: any) => {
      router.push(`/patient/${patient_uid}/appointments/${uid}`);
    };
  if (data.length === 0)
    return (
      <div className="mx-auto">
        <div>
          <div className="border-stroke rounded-lg min-h-[358px] max-w-[370px] border bg-white">
            <p className="text-base p-4">Appointments</p>
            <div className="w-full">
              <p className="text-base font-medium text-body-color text-center">
                No upcoming appointments
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="mx-auto">
      <div>
        <div className="border-stroke rounded-lg min-h-[358px] max-h-[358px] overflow-auto max-w-[370px] border bg-white">
          <p className="text-base px-4 pt-4">Upcoming Appointments</p>
          {data.map((item: any) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between  p-4 hover:bg-[#F5F5F5] hover:text-primary border border-stroke rounded-md m-2"
              >
                <div className="flex  items-center  w-full">
                  <div>
                    <h4 className="text-base font-medium text-black">
                      {item?.attributes?.doctor?.data?.attributes?.fullName}
                    </h4>
                    <p className="text-body-color text-xs">
                      {item?.attributes?.appointmentDate.split('T')[0]}
                    </p>
                  </div>
                </div>
                <div>
                  <span
                    onClick={goToAppointment(
                      item.attributes.patient.data.attributes.uid,
                      item.attributes.uid
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
