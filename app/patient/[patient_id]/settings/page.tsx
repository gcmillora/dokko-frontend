'use client';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { isUuid } from 'uuidv4';
import { findOnePatient } from '../../../../api/findOnePatient';
import { updateOnePatient } from '../../../../api/updateOnePatient';
import showToastMessage from '../../../../utils/error';
import { Patient } from '../../../../utils/types';
import { toast, ToastContainer } from 'react-toastify';

interface pageProps {
  params: {
    patient_id: string;
  };
}
export default function Page({ params }: pageProps) {
  const [patient, setPatient] = useState<Patient>({} as Patient);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [file, setFile] = useState<File>();
  const [preview, setPreview] = useState<any>();
  const [patientID, setPatientID] = useState<string>('');
  const [jwtToken, setJwtToken] = useState<string>('');

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const uploadProfile = async () => {
    if (file) {
      var formdata = new FormData();
      formdata.append('ref', 'api::patient.patient');
      formdata.append('refId', patientID);
      formdata.append('field', 'profilepicture');
      formdata.append('files', file, file?.name);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('http://localhost:1337/api/upload', {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
    } else alert('No file');
  };

  useEffect(() => {
    if (isUuid(params.patient_id)) {
      findOnePatient(params.patient_id).then((data) => {
        if (data.patients.data.length === 0) {
          showToastMessage('error', 'Invalid Patient ID');
          setTimeout(() => {
            router.push('/login');
          }, 2000);
        } else {
          setPatient(data.patients.data[0].attributes);
          setPatientID(data.patients.data[0].id);
          setFullName(data.patients.data[0].attributes.fullName);
          setEmail(data.patients.data[0].attributes.email);
          setPhone(data.patients.data[0].attributes.phoneNumber);
          setAddress(data.patients.data[0].attributes.address);
          setJwtToken(localStorage.getItem('jwtToken') || '');
        }
      });
    }
  }, []);

  const saveProfileChanges = async () => {
    console.log('saveProfileChanges');
    const response = await updateOnePatient(patientID, jwtToken, {
      fullName: fullName,
      email: email,
      phoneNumber: phone,
      address: address,
    });
    console.log('response: ', response);
    if (file) uploadProfile();
    if (response) {
      showToastMessage('success', 'Profile updated successfully');
    }
  };

  return (
    <div className="p-[30px]">
      <div className="flex flex-wrap items-end justify-between sm:flex-nowrap sm:space-x-4 md:mb-6">
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-semibold text-black">
            Settings Page
          </h2>
          <p className="text-sm font-medium text-body-color">
            Edit your profile information, click the Save button to apply.
          </p>
        </div>
        <div className="mb-6 flex items-center space-x-[18px]">
          <button className="flex h-11 items-center justify-center rounded border border-stroke bg-white px-6 text-base font-medium text-black hover:border-transparent hover:bg-danger hover:text-white">
            Cancel
          </button>
          <button
            className="flex h-11 items-center justify-center rounded border border-transparent bg-primary px-6 text-base font-medium text-white hover:bg-opacity-90"
            onClick={saveProfileChanges}
          >
            Save
          </button>
        </div>
      </div>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 lg:w-7/12 2xl:w-2/3">
          <div className="mb-8 rounded-lg border border-stroke bg-white lg:mb-0">
            <h3 className="border-b border-stroke py-4 px-7 text-base font-medium text-black">
              Personal Information
            </h3>
            <div className="p-7">
              <form>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 md:w-1/2">
                    <div className="mb-[30px]">
                      <label className="mb-[10px] block text-base font-medium text-black">
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          onChange={(e) => setFullName(e.target.value)}
                          value={fullName}
                          className="h-[46px] w-full rounded-md border border-[#E0E0E0] pl-12 pr-5 text-base text-black outline-none focus:border-primary"
                        />
                        <span className="absolute left-[18px] top-1/2 -translate-y-1/2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4993C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4993V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4993C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4993V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z"
                                fill="#637381"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.9987 3.33268C8.61799 3.33268 7.4987 4.45197 7.4987 5.83268C7.4987 7.21339 8.61799 8.33268 9.9987 8.33268C11.3794 8.33268 12.4987 7.21339 12.4987 5.83268C12.4987 4.45197 11.3794 3.33268 9.9987 3.33268ZM5.83203 5.83268C5.83203 3.5315 7.69751 1.66602 9.9987 1.66602C12.2999 1.66602 14.1654 3.5315 14.1654 5.83268C14.1654 8.13387 12.2999 9.99935 9.9987 9.99935C7.69751 9.99935 5.83203 8.13387 5.83203 5.83268Z"
                                fill="#637381"
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3 md:w-1/2">
                    <div className="mb-[30px]">
                      <label className="mb-[10px] block text-base font-medium text-black">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder=""
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-[46px] w-full rounded-md border border-[#E0E0E0] px-5 text-base text-black outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-[30px]">
                      <label className="mb-[10px] block text-base font-medium text-black">
                        Email Address
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder=""
                          disabled
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-[46px] w-full rounded-md border border-[#E0E0E0] pl-12 pr-5 text-base text-black outline-none focus:border-primary"
                        />
                        <span className="absolute left-[18px] top-1/2 -translate-y-1/2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.33203 4.16667C2.8756 4.16667 2.4987 4.54357 2.4987 5V15C2.4987 15.4564 2.8756 15.8333 3.33203 15.8333H16.6654C17.1218 15.8333 17.4987 15.4564 17.4987 15V5C17.4987 4.54357 17.1218 4.16667 16.6654 4.16667H3.33203ZM0.832031 5C0.832031 3.6231 1.95513 2.5 3.33203 2.5H16.6654C18.0423 2.5 19.1654 3.6231 19.1654 5V15C19.1654 16.3769 18.0423 17.5 16.6654 17.5H3.33203C1.95513 17.5 0.832031 16.3769 0.832031 15V5Z"
                                fill="#637381"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.982743 4.52154C1.24667 4.14449 1.76628 4.0528 2.14332 4.31673L9.99877 9.81554L17.8542 4.31673C18.2313 4.0528 18.7509 4.14449 19.0148 4.52154C19.2787 4.89858 19.187 5.41818 18.81 5.68211L10.4767 11.5154C10.1897 11.7163 9.80782 11.7163 9.52088 11.5154L1.18755 5.68211C0.81051 5.41818 0.718814 4.89858 0.982743 4.52154Z"
                                fill="#637381"
                              />
                            </g>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div>
                      <label className="mb-[10px] block text-base font-medium text-black">
                        BIO
                      </label>
                      <div className="relative">
                        <textarea
                          rows={8}
                          placeholder="Write your BIO"
                          className="w-full rounded-md border border-[#E0E0E0] p-5 pl-12 text-base text-black outline-none focus:border-primary"
                        >
                          {'lorem'}
                        </textarea>
                        <span className="absolute left-[18px] top-[22px]">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8" clip-path="url(#clip0_3222_998)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1.56426 3.23223C2.03311 2.76339 2.66899 2.5 3.33203 2.5H9.16536C9.6256 2.5 9.9987 2.8731 9.9987 3.33333C9.9987 3.79357 9.6256 4.16667 9.16536 4.16667H3.33203C3.11102 4.16667 2.89906 4.25446 2.74278 4.41074C2.58649 4.56702 2.4987 4.77899 2.4987 5V16.6667C2.4987 16.8877 2.58649 17.0996 2.74278 17.2559C2.89906 17.4122 3.11102 17.5 3.33203 17.5H14.9987C15.2197 17.5 15.4317 17.4122 15.5879 17.2559C15.7442 17.0996 15.832 16.8877 15.832 16.6667V10.8333C15.832 10.3731 16.2051 10 16.6654 10C17.1256 10 17.4987 10.3731 17.4987 10.8333V16.6667C17.4987 17.3297 17.2353 17.9656 16.7665 18.4344C16.2976 18.9033 15.6617 19.1667 14.9987 19.1667H3.33203C2.66899 19.1667 2.0331 18.9033 1.56426 18.4344C1.09542 17.9656 0.832031 17.3297 0.832031 16.6667V5C0.832031 4.33696 1.09542 3.70107 1.56426 3.23223Z"
                                fill="#637381"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M16.6654 2.39909C16.4176 2.39909 16.1799 2.49754 16.0046 2.67278L8.25119 10.4262L7.81069 12.1882L9.57267 11.7477L17.3261 3.99427C17.5014 3.81903 17.5998 3.58135 17.5998 3.33352C17.5998 3.0857 17.5014 2.84802 17.3261 2.67278C17.1509 2.49754 16.9132 2.39909 16.6654 2.39909ZM14.8261 1.49427C15.3139 1.00647 15.9755 0.732422 16.6654 0.732422C17.3552 0.732422 18.0168 1.00647 18.5046 1.49427C18.9924 1.98207 19.2665 2.64367 19.2665 3.33352C19.2665 4.02338 18.9924 4.68498 18.5046 5.17278L10.588 13.0894C10.4812 13.1962 10.3474 13.272 10.2008 13.3086L6.8675 14.142C6.58352 14.213 6.28311 14.1298 6.07613 13.9228C5.86914 13.7158 5.78594 13.4154 5.85693 13.1314L6.69026 9.79808C6.7269 9.65155 6.80266 9.51773 6.90946 9.41093L14.8261 1.49427Z"
                                fill="#637381"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_3222_998">
                                <rect width="20" height="20" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:w-5/12 2xl:w-1/3">
          <div className="w-full rounded-lg border border-stroke bg-white lg:w-auto">
            <h3 className="border-b border-stroke py-4 px-7 text-base font-medium text-black">
              Your Photo
            </h3>
            <div className="p-7">
              <div className="mb-4 flex items-center">
                <div className="mr-3 h-[55px] w-full max-w-[55px]">
                  <img
                    src={patient.profilepicture?.data?.attributes?.url}
                    alt="photo"
                    className="h-full w-full rounded-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="mb-[6px] text-base text-black">
                    Edit your photo
                  </p>
                  <div className="flex space-x-[10px]">
                    <button className="text-sm text-body-color hover:text-danger">
                      Delete
                    </button>
                    <label className="cursor-pointer text-sm text-primary">
                      Update
                      <input
                        type="file"
                        className="sr-only"
                        name="upload"
                        id="upload"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex min-h-[180px] w-full items-center justify-center rounded-md border border-dashed border-primary bg-gray p-3">
                <div className="text-center">
                  <div className="flex flex-row justify-center">
                    {file && <img src={preview} width={256} height={256} />}
                  </div>

                  <label htmlFor="file-upload">
                    <span className="mx-auto mb-[14px] flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M1.9987 9.33398C2.36689 9.33398 2.66536 9.63246 2.66536 10.0007V12.6673C2.66536 12.8441 2.7356 13.0137 2.86063 13.1387C2.98565 13.2637 3.15522 13.334 3.33203 13.334H12.6654C12.8422 13.334 13.0117 13.2637 13.1368 13.1387C13.2618 13.0137 13.332 12.8441 13.332 12.6673V10.0007C13.332 9.63246 13.6305 9.33398 13.9987 9.33398C14.3669 9.33398 14.6654 9.63246 14.6654 10.0007V12.6673C14.6654 13.1978 14.4546 13.7065 14.0796 14.0815C13.7045 14.4566 13.1958 14.6673 12.6654 14.6673H3.33203C2.8016 14.6673 2.29289 14.4566 1.91782 14.0815C1.54274 13.7065 1.33203 13.1978 1.33203 12.6673V10.0007C1.33203 9.63246 1.63051 9.33398 1.9987 9.33398Z"
                          fill="#3056D3"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.5286 1.52925C7.78894 1.2689 8.21106 1.2689 8.4714 1.52925L11.8047 4.86258C12.0651 5.12293 12.0651 5.54504 11.8047 5.80539C11.5444 6.06574 11.1223 6.06574 10.8619 5.80539L8 2.94346L5.13807 5.80539C4.87772 6.06574 4.45561 6.06574 4.19526 5.80539C3.93491 5.54504 3.93491 5.12293 4.19526 4.86258L7.5286 1.52925Z"
                          fill="#3056D3"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.9987 1.33398C8.36689 1.33398 8.66536 1.63246 8.66536 2.00065V10.0007C8.66536 10.3688 8.36689 10.6673 7.9987 10.6673C7.63051 10.6673 7.33203 10.3688 7.33203 10.0007V2.00065C7.33203 1.63246 7.63051 1.33398 7.9987 1.33398Z"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </label>

                  <p className="mb-1 text-xs text-body-color">
                    <span className="text-primary"> Click to upload </span> or
                    drag and drop
                  </p>

                  <p className="mx-auto max-w-[126px] text-xs text-body-color">
                    SVG, PNG, JPG or GIF (max, 800 X 800px)
                  </p>
                  <input
                    type="file"
                    onChange={handleFileChange}
                    id="file-upload"
                    name="file-upload"
                    className="opacity-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
