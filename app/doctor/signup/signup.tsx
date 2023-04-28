import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { Cookie } from '@next/font/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { uuid } from 'uuidv4';
import showToastMessage from '../../../utils/error';
import { CreateDoctorInput, CreatePatientInput } from '../../../utils/types';

export default function DoctorSignup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [token, setToken] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [address, setAddress] = useState('hh');
  const [status, setStatus] = useState(false);
  const uid = uuid();

  const handleSpecialtyChange = (event: any) => {
    setSpecialty(event.target.value);
  };

  const option = [
    'Dentist',
    'Surgeon',
    'Cardiologist',
    'Dermatologist',
    'Gynecologist',
    'Ophthalmologist',
    'Pediatrician',
    'Psychiatrist',
    'Urologist',
    'Other',
  ];

  const roomProperties = {
    name: uid,
    privacy: 'private',
    properties: {
      start_audio_off: true,
      start_video_off: true,
    },
  };

  const createMeetingToken = async () => {
    console.log('creating meeting token for doctor');
    const data = fetch('https://api.daily.co/v1/meeting-tokens', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 31b1e44009c810a075699272ddcbc6d9544cadd81244a1f7d6a22a0d1db55950`,
      },
      body: JSON.stringify({
        properties: {
          room_name: uid,
        },
      }),
    })
      .then((response) => response.json())
      .then(async (data) => {
        console.log('Success:', data);
        console.log(data.token);
        createDoctor(data.token);
        setToken(data.token);
        const res = await createDoctor(data.token);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const createRoom = async () => {
    //call api curl
    console.log('creating room');
    const data = fetch('https://api.daily.co/v1/rooms/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 31b1e44009c810a075699272ddcbc6d9544cadd81244a1f7d6a22a0d1db55950`,
      },
      body: JSON.stringify(roomProperties),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const createDoctor = async (token: string) => {
    const doctor: CreateDoctorInput = {
      fullName: fullName,
      email: email,
      medicalId: '12345',
      status: true,
      specialty: specialty,
    };
    console.log(uid);
    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_BACKEND_API_URL,
      cache: new InMemoryCache(),
    });
    console.log(doctor);
    const { data } = await client.mutate({
      variables: {
        fullName: fullName,
        email: email,
        medicalId: '12345',
        status: true,
        specialty: 'Dentist',
        uid: uid,
        meeting_token: token,
      },
      mutation: gql`
        mutation (
          $fullName: String!
          $specialty: String!
          $email: String!
          $medicalId: String!
          $status: Boolean!
          $uid: String!
          $meeting_token: String!
        ) {
          createDoctor(
            data: {
              fullName: $fullName
              email: $email
              medicalId: $medicalId
              status: $status
              uid: $uid
              specialty: $specialty
              meeting_token: $meeting_token
            }
          ) {
            data {
              id
              attributes {
                uid
                fullName
                email
                medicalId
                status
                specialty
                meeting_token
              }
            }
          }
        }
      `,
    });
    console.log(data);

    return data;
  };

  const registerUser = async (e: any) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.NEXT_PUBLIC_BACKEND_STRAPI_RAW}/api/auth/local/register`,
        {
          username: username,
          email: email,
          password: password,
          level: 'doctor',
          uid: uid,
        }
      )
      .then(async (response) => {
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('jwtToken', response.data.jwt);
        const room = await createRoom();
        const tk = await createMeetingToken();
        showToastMessage('success', 'Doctor created successfully');
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
        showToastMessage('error', 'Error: Could not create doctor');
      });
  };

  return (
    <form>
      <div className="-mx-2 flex flex-wrap">
        <div className="w-full px-2 sm:w-1/2">
          <div className="mb-4">
            <label
              htmlFor="full_name"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Full Name
            </label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              name="name"
              className="border-form-stroke text-body-color focus:border-primary w-full rounded border bg-[#F5F6F7] p-3 text-sm font-medium outline-none"
            />
          </div>
        </div>
        <div className="w-full px-2 sm:w-1/2">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-form-stroke text-body-color focus:border-primary w-full rounded border bg-[#F5F6F7] p-3 text-sm font-medium outline-none"
            />
          </div>
        </div>
        <div className="w-full px-2">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-form-stroke text-body-color focus:border-primary w-full rounded border bg-[#F5F6F7] p-3 text-sm font-medium outline-none"
            />
          </div>
        </div>
        <div className="w-full px-2">
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-form-stroke text-body-color focus:border-primary w-full rounded border bg-[#F5F6F7] p-3 text-sm font-medium outline-none"
            />
          </div>
        </div>
        <div className="w-full px-2">
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-black"
            >
              Specialty
            </label>
            <select
              className="border-form-stroke text-body-color focus:border-primary w-full rounded border bg-[#F5F6F7] p-3 text-sm font-medium outline-none"
              onChange={handleSpecialtyChange}
            >
              {option.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full px-2">
          <div className="mb-8">
            <label
              htmlFor="checkboxLabelTwo"
              className="flex cursor-pointer text-base text-[#adadad]"
            >
              <div className="relative pt-[2px]">
                <input
                  type="checkbox"
                  id="checkboxLabelTwo"
                  className="sr-only"
                />
                <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-[#E2E2E2]">
                  <span className="opacity-0">
                    <svg
                      width="11"
                      height="8"
                      viewBox="0 0 11 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                        fill="#3056D3"
                        stroke="#3056D3"
                        strokeWidth="0.4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p className="text-body-color text-sm font-medium">
                By creating account means you agree to the&nbsp;
                <a
                  href="javascript:void(0)"
                  className="text-primary hover:underline"
                >
                  Terms and Conditions
                </a>
                , and our&nbsp;
                <a
                  href="javascript:void(0)"
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </a>
              </p>
            </label>
          </div>
        </div>
        <div className="w-full px-2">
          <button
            className="bg-primary flex items-center justify-center rounded py-[14px] px-14 text-sm font-semibold text-white"
            onClick={registerUser}
          >
            Create Account
          </button>
          <ToastContainer />
        </div>
      </div>
    </form>
  );
}
