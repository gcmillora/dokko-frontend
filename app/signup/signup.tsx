import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { Cookie } from '@next/font/google';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Router from 'next/router';
import { useState } from 'react';
import { uuid } from 'uuidv4';
import { CreatePatientInput } from '../../utils/types';

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('hh');
  const [status, setStatus] = useState(false);

  const createPatient = async () => {
    const uid = uuid();
    const patient: CreatePatientInput = {
      fullName: fullName,
      email: email,
      address: address,
      status: true,
    };
    console.log(uid);
    const client = new ApolloClient({
      uri: 'http://127.0.0.1:1337/graphql',
      cache: new InMemoryCache(),
    });
    console.log(patient);
    const { data } = await client.mutate({
      variables: {
        fullName: fullName,
        email: email,
        address: address,
        status: true,
        uid: uid,
      },
      mutation: gql`
        mutation (
          $fullName: String!
          $email: String!
          $address: String!
          $status: Boolean!
          $uid: String!
        ) {
          createPatient(
            data: {
              fullName: $fullName
              email: $email
              address: $address
              status: $status
              uid: $uid
            }
          ) {
            data {
              attributes {
                uid
                fullName
                email
                address
                status
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
      .post('http://localhost:1337/api/auth/local/register', {
        username: username,
        email: email,
        password: password,
        level: 'patient',
      })
      .then(async (response) => {
        console.log('Well done!');
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('jwtToken', response.data.jwt);
        const res = await createPatient();
        router.push('/');
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
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
                        stroke-width="0.4"
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
        </div>
      </div>
    </form>
  );
}
