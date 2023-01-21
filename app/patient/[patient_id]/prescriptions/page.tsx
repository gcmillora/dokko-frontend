'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { findAllPrescriptions } from '../../../../api/findAllPrescriptionsByPatient';

interface pageProps {
  params: {
    patient_id: string;
  };
}

export default function Page({ params }: pageProps) {
  const [prescriptions, setPrescriptions] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageNo, setPageNo] = useState(1);

  const router = useRouter();
  useEffect(() => {
    findAllPrescriptions(params.patient_id, page).then((data) => {
      setPrescriptions(data.prescriptions.data);
      setCount(data.prescriptions.meta.total);
    });
  }, [page]);

  return (
    <div className="mx-auto px-16 mt-24">
      <div className="flex flex-row justify-between">
        <div>
          <p className="text-4xl font-bold text-body-color">Prescriptions</p>
        </div>
        <div>
          <Link
            href={`/patient/${params.patient_id}/appointments/create`}
            className="bg-primary inline-flex items-center justify-center rounded-[5px] py-3 px-6 text-center text-base font-medium text-white hover:bg-opacity-90"
          >
            <span className="mr-[10px]">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            Book an Appointment
          </Link>
        </div>
      </div>
      <div className="rounded-lg bg-white mt-12 border-form-stroke border">
        <div className="max-w-full overflow-x-auto min-h-[520px]">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-[#F6F8FB]">
                <th className="min-w-[210px] py-6 pl-10 pr-4">
                  <p className="text-left text-base font-medium text-body-color">
                    Doctor
                  </p>
                </th>
                <th className="min-w-[150px] py-6 px-4">
                  <p className="text-left text-base font-medium text-body-color">
                    Specialty
                  </p>
                </th>
                <th className="min-w-[250px] py-6 px-4">
                  <p className="text-left text-base font-medium text-body-color">
                    Date
                  </p>
                </th>

                <th className="min-w-[130px] py-6 px-4">
                  <p className="text-left text-base font-medium text-body-color">
                    Condition
                  </p>
                </th>

                <th className="min-w-[200px] py-6 px-4">
                  <p className="text-left text-base font-medium text-body-color">
                    Prescription
                  </p>
                </th>

                <th className="min-w-[100px] py-6 pl-4 pr-10">
                  <p className="text-right text-base font-medium text-body-color">
                    Action
                  </p>
                </th>
              </tr>
            </thead>

            <tbody>
              {prescriptions.map((prescription: any, index: number) => (
                <tr key={index} className="border-b border-stroke">
                  <td className="py-5 pl-10 pr-3">
                    <div className="flex items-center space-x-4">
                      <p className="text-body text-body-color">
                        {
                          prescription?.attributes?.doctor?.data?.attributes
                            ?.fullName
                        }
                      </p>
                    </div>
                  </td>
                  <td className="py-5 px-4">
                    <p className="text-base text-body-color">
                      {
                        prescription?.attributes?.doctor?.data?.attributes
                          ?.specialty
                      }
                    </p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="text-base text-body-color">
                      {new Date(
                        prescription?.attributes?.appointment?.data?.attributes?.appointmentDate
                      ).toLocaleString()}
                    </p>
                  </td>
                  <td className="py-5 px-4">
                    <p className="text-base text-body-color">
                      {
                        prescription.attributes?.appointment?.data?.attributes
                          ?.condition
                      }
                    </p>
                  </td>
                  <td className="py-5 px-4">
                    <Link
                      className="text-base text-body-color"
                      href={`/patient/${params.patient_id}/prescriptions/${prescription.attributes.uid}`}
                    >
                      {prescription.attributes?.prescription}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-row-reverse">
        <div className="text-center">
          <div className="inline-flex rounded-xl border border-[#e4e4e4] bg-white p-4">
            <ul className="flex items-center">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-primary flex h-9 w-9 items-center justify-center rounded-tl rounded-bl border border-[#EDEFF1] text-base text-[#838995] hover:border-[#9CB3FF] hover:bg-[#F2F5FF]"
                >
                  <span>
                    <svg
                      width="8"
                      height="15"
                      viewBox="0 0 8 15"
                      className="fill-current stroke-current"
                    >
                      <path
                        d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                        stroke-width="0.3"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <button
                  onClick={(event) => setPage(page)}
                  className="hover:text-primary flex h-9 w-9 items-center justify-center border border-[#EDEFF1] text-base text-[#838995] hover:border-[#9CB3FF] hover:bg-[#F2F5FF]"
                >
                  {pageNo}
                </button>
              </li>
              <li>
                <button
                  onClick={(event) => setPage(pageNo + 1)}
                  className="hover:text-primary flex h-9 w-9 items-center justify-center border border-[#EDEFF1] text-base text-[#838995] hover:border-[#9CB3FF] hover:bg-[#F2F5FF]"
                >
                  {pageNo + 1}
                </button>
              </li>
              <li>
                <button
                  onClick={(event) => setPage(pageNo + 2)}
                  className="hover:text-primary flex h-9 w-9 items-center justify-center border border-[#EDEFF1] text-base text-[#838995] hover:border-[#9CB3FF] hover:bg-[#F2F5FF]"
                >
                  {pageNo + 2}
                </button>
              </li>
              <li>
                <button
                  onClick={(event) => setPage(pageNo + 3)}
                  className="hover:text-primary flex h-9 w-9 items-center justify-center border border-[#EDEFF1] text-base text-[#838995] hover:border-[#9CB3FF] hover:bg-[#F2F5FF]"
                >
                  {pageNo + 3}
                </button>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-primary flex h-9 w-9 items-center justify-center rounded-tr rounded-br border border-[#EDEFF1] text-base text-[#838995] hover:border-[#9CB3FF] hover:bg-[#F2F5FF]"
                >
                  <span>
                    <svg
                      width="8"
                      height="15"
                      viewBox="0 0 8 15"
                      className="fill-current stroke-current"
                    >
                      <path
                        d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                        stroke-width="0.3"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}