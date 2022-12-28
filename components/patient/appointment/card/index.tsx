import { useRouter } from 'next/navigation';

export default function AppointmentCard({ data }: any) {
  const router = useRouter();

  const goToAppointment =
    (patient_uid: string, uid: string) => (event: any) => {
      router.push(`/patient/${patient_uid}/appointments/${uid}`);
    };

  return (
    <div className="mx-auto">
      <div>
        <div className="border-stroke min-h-[358px] max-w-[370px] border bg-white py-[10px]">
          {data.map((item: any) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between py-[18px] pl-8 pr-8 hover:bg-[#F5F5F5]"
              >
                <div className="flex items-center">
                  <div>
                    <h4 className="text-base font-medium text-black">
                      {item.attributes.doctor.data.attributes.fullName}
                    </h4>
                    <p className="text-body-color text-base">
                      {item.attributes.appointmentDate.split('T')[0]}
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
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
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
