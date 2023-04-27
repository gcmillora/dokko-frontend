'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { findOnePatient } from '../../../api/findOnePatient';
import Image from 'next/image';
import { patientDefaultPhoto } from '../../../utils/exports';

export default function Sidebar() {
  const router = useRouter();
  const [uid, setUid] = useState('');
  const [patient, setPatient] = useState<any>();

  const logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('uid');
    router.push('/signin');
  };

  useEffect(() => {
    setUid(localStorage.getItem('uid') || '');
    findOnePatient(localStorage.getItem('uid') || '').then((data) => {
      setPatient(data.patients.data[0].attributes);
      console.log(data.patients.data[0].attributes);
    });
  }, []);

  return (
    <section x-data="{openDropDown: false}" className="h-full w-full bg-gray-2">
      <div className="flex h-full max-h-full w-full flex-col justify-between overflow-y-scroll bg-white shadow-card">
        <div>
          <div className="flex items-center p-8">
            <div className="mr-4 h-[50px] w-full max-w-[50px] rounded-full border-2 border-primary">
              <Image
                src={
                  patient?.profilepicture?.data?.attributes?.url ||
                  patientDefaultPhoto
                }
                alt="Icon"
                width={50}
                height={50}
                className="h-full w-full rounded-full object-cover object-center"
              />
            </div>
            <div>
              <p className="font-medium text-body-color">Good Day 👋</p>
              <h6 className="text-base font-medium text-body-color">
                {patient?.fullName}
              </h6>
            </div>
          </div>
          <div className="px-4">
            <nav>
              <ul>
                <li>
                  <a
                    href={`/patient/${uid}`}
                    className="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-body-color duration-200 hover:bg-primary hover:text-white"
                  >
                    <span className="pr-[10px]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.53955 0.907986C8.81038 0.697338 9.18962 0.697338 9.46045 0.907986L16.2105 6.15799C16.3931 6.30008 16.5 6.51856 16.5 6.75V15C16.5 15.5967 16.2629 16.169 15.841 16.591C15.419 17.0129 14.8467 17.25 14.25 17.25H3.75C3.15326 17.25 2.58097 17.0129 2.15901 16.591C1.73705 16.169 1.5 15.5967 1.5 15V6.75C1.5 6.51856 1.60685 6.30008 1.78954 6.15799L8.53955 0.907986ZM3 7.11681V15C3 15.1989 3.07902 15.3897 3.21967 15.5303C3.36032 15.671 3.55109 15.75 3.75 15.75H14.25C14.4489 15.75 14.6397 15.671 14.7803 15.5303C14.921 15.3897 15 15.1989 15 15V7.11681L9 2.45015L3 7.11681Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 9C6 8.58579 6.33579 8.25 6.75 8.25H11.25C11.6642 8.25 12 8.58579 12 9V16.5C12 16.9142 11.6642 17.25 11.25 17.25C10.8358 17.25 10.5 16.9142 10.5 16.5V9.75H7.5V16.5C7.5 16.9142 7.16421 17.25 6.75 17.25C6.33579 17.25 6 16.9142 6 16.5V9Z"
                        />
                      </svg>
                    </span>
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href={`/patient/${uid}/appointments`}
                    className="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-body-color duration-200 hover:bg-primary hover:text-white"
                  >
                    <span className="pr-[10px]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.5 2.25C1.5 1.83579 1.83579 1.5 2.25 1.5H7.5C7.91421 1.5 8.25 1.83579 8.25 2.25V7.5C8.25 7.91421 7.91421 8.25 7.5 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5V2.25ZM3 3V6.75H6.75V3H3Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.75 2.25C9.75 1.83579 10.0858 1.5 10.5 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25V7.5C16.5 7.91421 16.1642 8.25 15.75 8.25H10.5C10.0858 8.25 9.75 7.91421 9.75 7.5V2.25ZM11.25 3V6.75H15V3H11.25Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.75 10.5C9.75 10.0858 10.0858 9.75 10.5 9.75H15.75C16.1642 9.75 16.5 10.0858 16.5 10.5V15.75C16.5 16.1642 16.1642 16.5 15.75 16.5H10.5C10.0858 16.5 9.75 16.1642 9.75 15.75V10.5ZM11.25 11.25V15H15V11.25H11.25Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.5 10.5C1.5 10.0858 1.83579 9.75 2.25 9.75H7.5C7.91421 9.75 8.25 10.0858 8.25 10.5V15.75C8.25 16.1642 7.91421 16.5 7.5 16.5H2.25C1.83579 16.5 1.5 16.1642 1.5 15.75V10.5ZM3 11.25V15H6.75V11.25H3Z"
                        />
                      </svg>
                    </span>
                    Appointments
                  </a>
                </li>
                <li>
                  <a
                    href={`/patient/${uid}/prescriptions`}
                    className="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-body-color duration-200 hover:bg-primary hover:text-white"
                  >
                    <span className="pr-[10px]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V15C3 15.4142 3.33579 15.75 3.75 15.75H14.25C14.6642 15.75 15 15.4142 15 15V4.5C15 4.08579 14.6642 3.75 14.25 3.75H3.75ZM1.5 4.5C1.5 3.25736 2.50736 2.25 3.75 2.25H14.25C15.4926 2.25 16.5 3.25736 16.5 4.5V15C16.5 16.2426 15.4926 17.25 14.25 17.25H3.75C2.50736 17.25 1.5 16.2426 1.5 15V4.5Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 0.75C12.4142 0.75 12.75 1.08579 12.75 1.5V4.5C12.75 4.91421 12.4142 5.25 12 5.25C11.5858 5.25 11.25 4.91421 11.25 4.5V1.5C11.25 1.08579 11.5858 0.75 12 0.75Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 0.75C6.41421 0.75 6.75 1.08579 6.75 1.5V4.5C6.75 4.91421 6.41421 5.25 6 5.25C5.58579 5.25 5.25 4.91421 5.25 4.5V1.5C5.25 1.08579 5.58579 0.75 6 0.75Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.5 7.5C1.5 7.08579 1.83579 6.75 2.25 6.75H15.75C16.1642 6.75 16.5 7.08579 16.5 7.5C16.5 7.91421 16.1642 8.25 15.75 8.25H2.25C1.83579 8.25 1.5 7.91421 1.5 7.5Z"
                        />
                      </svg>
                    </span>
                    Prescriptions
                  </a>
                </li>
                <li>
                  <a
                    href={`/patient/${uid}/medical-record/${patient?.medical_redicord?.data?.attributes?.uid}`}
                    className="relative mb-[2px] flex items-center rounded py-[10px] px-4 text-base font-medium text-body-color duration-200 hover:bg-primary hover:text-white"
                  >
                    <span className="pr-[10px]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        className="fill-current"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3 3C2.80109 3 2.61032 3.07902 2.46967 3.21967C2.32902 3.36032 2.25 3.55109 2.25 3.75V14.25C2.25 14.4489 2.32902 14.6397 2.46967 14.7803C2.61032 14.921 2.80109 15 3 15H15C15.1989 15 15.3897 14.921 15.5303 14.7803C15.671 14.6397 15.75 14.4489 15.75 14.25V6C15.75 5.80109 15.671 5.61032 15.5303 5.46967C15.3897 5.32902 15.1989 5.25 15 5.25H8.25C7.99924 5.25 7.76506 5.12467 7.62596 4.91602L6.34861 3H3ZM1.40901 2.15901C1.83097 1.73705 2.40326 1.5 3 1.5H6.75C7.00077 1.5 7.23494 1.62533 7.37404 1.83397L8.65139 3.75H15C15.5967 3.75 16.169 3.98705 16.591 4.40901C17.013 4.83097 17.25 5.40326 17.25 6V14.25C17.25 14.8467 17.013 15.419 16.591 15.841C16.169 16.2629 15.5967 16.5 15 16.5H3C2.40326 16.5 1.83097 16.2629 1.40901 15.841C0.987053 15.419 0.75 14.8467 0.75 14.25V3.75C0.75 3.15326 0.987053 2.58097 1.40901 2.15901Z"
                        />
                      </svg>
                    </span>
                    Medical Record
                  </a>
                </li>
                <li>
                  <a
                    href={`/patient/${uid}/inbox`}
                    className="relative mb-[2px] flex items-center justify-between rounded py-[10px] px-4 text-base font-medium text-body-color duration-200 hover:bg-primary hover:text-white"
                  >
                    <span className="flex items-center">
                      <span className="pr-[10px]">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          className="fill-current"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 3.75C2.58921 3.75 2.25 4.08921 2.25 4.5V13.5C2.25 13.9108 2.58921 14.25 3 14.25H15C15.4108 14.25 15.75 13.9108 15.75 13.5V4.5C15.75 4.08921 15.4108 3.75 15 3.75H3ZM0.75 4.5C0.75 3.26079 1.76079 2.25 3 2.25H15C16.2392 2.25 17.25 3.26079 17.25 4.5V13.5C17.25 14.7392 16.2392 15.75 15 15.75H3C1.76079 15.75 0.75 14.7392 0.75 13.5V4.5Z"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.88564 4.06997C1.12318 3.73063 1.59082 3.6481 1.93016 3.88564L9.00006 8.83457L16.07 3.88564C16.4093 3.6481 16.877 3.73063 17.1145 4.06997C17.352 4.4093 17.2695 4.87695 16.9302 5.11449L9.43016 10.3645C9.17192 10.5453 8.82821 10.5453 8.56997 10.3645L1.06997 5.11449C0.730631 4.87695 0.648105 4.4093 0.88564 4.06997Z"
                          />
                        </svg>
                      </span>
                      Inbox
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="m-8 mt-6 border-t border-stroke pt-6">
          <div className="flex items-center justify-evenly pt-2">
            <a
              href="javascript:void(0)"
              className="text-sm font-medium text-body-color hover:text-primary"
            >
              Privacy
            </a>
            <a
              href="javascript:void(0)"
              className="text-sm font-medium text-body-color hover:text-primary"
            >
              Terms
            </a>
            <button
              className="text-sm font-medium text-body-color hover:text-primary"
              onClick={logout}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
