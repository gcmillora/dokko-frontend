import Link from 'next/link';

export default function CreateAppointmentCard({ patient_id }: any) {
  return (
    <div className="border border-stroke xs:px-10 relative ml-auto w-full max-w-[370px] overflow-hidden rounded-lg bg-white py-10 px-6 text-center">
      <div className="bg-primary mx-auto mb-8 flex h-[100px] w-[100px] items-center justify-center rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800px"
          height="800px"
          viewBox="0 0 48 48"
          fill="none"
        >
          <rect
            x="4"
            y="10"
            width="40"
            height="30"
            rx="2"
            fill="#2F88FF"
            stroke="#000000"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14 6V14"
            stroke="#000000"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M25 23L14 23"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M34 31L14 31"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M34 6V14"
            stroke="#000000"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <h4 className="xs:text-2xl mb-3 text-xl md:text-xl lg:text-2xl">
        Create an <br />
        Appointment
      </h4>
      <p className="text-body-color mb-8 text-base font-medium"></p>
      <div className="flex items-center justify-center space-x-4">
        <button className="border border-stroke  xs:px-8 inline-flex items-center justify-center rounded-md py-[10px] px-5 text-center text-base  hover:bg-primary hover:text-white">
          <Link href={`/patient/${patient_id}/appointments/create`}>
            Create
          </Link>
        </button>
      </div>
    </div>
  );
}
