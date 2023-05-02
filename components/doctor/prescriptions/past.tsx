import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { findPastPrescriptionsDoctor } from '../../../query/doctor/findPastPrescriptionsDoctor';

export default function PastPrescriptionDoctor({
  doctor_id,
  jwtToken,
}: {
  doctor_id: string;
  jwtToken: string;
}) {
  const [pastPrescriptions, setPastPrescriptions] = useState([]);
  const router = useRouter();
  const goToPrescription =
    (doctor_uid: string, uid: string) => (event: any) => {
      router.push(`/doctor/${doctor_uid}/prescriptions/${uid}`);
    };
  useEffect(() => {
    if (!jwtToken) return;
    findPastPrescriptionsDoctor(doctor_id, jwtToken).then((data) => {
      setPastPrescriptions(data.prescriptions.data);
    });
  }, []);

  return (
    <div className="mx-auto">
      <div>
        <div className="border-stroke rounded-lg  min-h-[358px] border bg-white py-[10px]">
          <p className="text-base px-4 pt-4 font-semibold mb-4">Reports </p>
          {pastPrescriptions.map((item: any) => {
            return (
              <div
                key={item.id}
                className="flex items-center justify-between py-[18px] pl-8 pr-8 hover:bg-[#F5F5F5] border-t border-b border-stroke "
              >
                <div className="flex items-center">
                  <div>
                    <h4 className="text-base font-medium text-black">
                      {item?.attributes?.patient?.data?.attributes?.fullName}
                    </h4>
                    <p className="text-body-color text-xs ">
                      {
                        item?.attributes?.appointment?.data?.attributes?.appointmentDate?.split(
                          'T'
                        )[0]
                      }
                    </p>
                  </div>
                </div>
                <div>
                  <span>
                    <svg
                      onClick={goToPrescription(
                        item?.attributes?.doctor?.data?.attributes?.uid,
                        item?.attributes?.uid
                      )}
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
