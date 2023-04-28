'use client';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import showToastMessage from '../../utils/error';

export default function LoginForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const findOneDoctor = async (email: string) => {
    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_BACKEND_API_URL,
      cache: new InMemoryCache(),
    });
    const { data } = await client.query({
      variables: {
        email: email,
      },
      query: gql`
        query ($email: String!) {
          doctors(filters: { email: { eq: $email } }) {
            data {
              attributes {
                uid
                fullName
                email
              }
            }
          }
        }
      `,
    });
    return data;
  };

  const findOnePatient = async (email: string) => {
    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_BACKEND_API_URL,
      cache: new InMemoryCache(),
    });
    const { data } = await client.query({
      variables: {
        email: email,
      },
      query: gql`
        query ($email: String!) {
          patients(filters: { email: { eq: $email } }) {
            data {
              attributes {
                uid
                fullName
                email
              }
            }
          }
        }
      `,
    });
    console.log(data);
    return data;
  };

  const onSubmit = (data: any) => {
    console.log(data);
    axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_STRAPI_RAW}/api/auth/local`, {
        identifier: data.email,
        password: data.password,
      })
      .then(async (response) => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
        localStorage.setItem('jwtToken', response.data.jwt);
        if (response.data.user.level === 'patient') {
          const patient = await findOnePatient(data.email);

          localStorage.setItem('uid', patient.patients.data[0].attributes.uid);
          router.push(`/patient/${patient.patients.data[0].attributes.uid}`);
        } else if (response.data.user.level === 'doctor') {
          const doctor = await findOneDoctor(data.email);

          localStorage.setItem('uid', doctor.doctors.data[0].attributes.uid);
          router.push(`/doctor/${doctor.doctors.data[0].attributes.uid}`);
        }
      })
      .catch((error) => {
        console.log('An error occurred:', error.response);
        showToastMessage('error', 'Invalid e-mail or password!');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8 flex flex-col">
          <div>
            <label className="mb-3 text-body-color">Email Address</label>
            <input
              type="email"
              className="text-field-normal"
              {...register('email', {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && errors.email.type === 'required' && (
              <p className="text-danger text-xs mb-4">E-mail is required.</p>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <p className="text-danger text-xs mb-4">Invalid e-mail format</p>
            )}
          </div>
          <div>
            <label className="mb-3 text-body-color">Password</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className="text-field-normal"
            />
            {errors.password && (
              <p className="text-danger text-xs mb-4">
                Please check the password
              </p>
            )}
          </div>
        </div>
        <div className="mb-8">
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md border border-primary bg-primary py-3 px-[14px] text-white transition hover:bg-opacity-90"
          >
            Sign In
          </button>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}
