'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import showToastMessage from '../../utils/error';
import LoginForm from '../../components/forms/loginValidation';

export default function Page() {
  const router = useRouter();

  const [emailInfo, setEmailInfo] = useState('');
  const [passwordInfo, setPasswordInfo] = useState('');

  return (
    <div className="bg-white mt-24" suppressHydrationWarning={true}>
      <div className="flex flex-wrap items-stretch">
        <div className="w-full lg:w-1/2">
          <div className="w-full py-14 px-6 sm:p-[70px] sm:px-12 xl:px-[90px]">
            <div>
              <p className="mb-10 text-[32px] font-bold text-dark">Sign In</p>
              <LoginForm />
            </div>
            <div className="flex flex-wrap justify-between">
              <a
                href="javascript:void(0)"
                className="mb-2 mr-2 inline-block text-base text-[#adadad] hover:text-primary hover:underline"
              >
                Forget Password?
              </a>
              <p className="mb-2 text-base text-[#adadad]">Not a member yet?</p>
              <a href="/signup" className="text-primary hover:underline">
                Sign Up
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative h-full w-full overflow-hidden bg-primary">
            <div className="flex h-full items-end p-8 sm:p-14">
              <p className="text-2xl font-bold text-white">
                Hey <br />
                Welcome <br />
                Back
              </p>
              <div>
                <span className="absolute left-0 top-0">
                  <svg
                    width="415"
                    height="355"
                    viewBox="0 0 415 355"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M415 107.5C415 244.19 304.19 355 167.5 355C30.8095 355 -80 244.19 -80 107.5C-80 -29.1905 30.8095 -140 167.5 -140C304.19 -140 415 -29.1905 415 107.5Z"
                      fill="url(#paint0_linear_1179_8)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1179_8"
                        x1="167.5"
                        y1="-140"
                        x2="167.5"
                        y2="355"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.177083"
                          stop-color="white"
                          stop-opacity="0.16"
                        />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute top-0 left-0">
                  <svg
                    width="177"
                    height="354"
                    viewBox="0 0 177 354"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M177 177C177 274.754 97.7544 354 0 354C-97.7544 354 -177 274.754 -177 177C-177 79.2456 -97.7544 0 0 0C97.7544 0 177 79.2456 177 177Z"
                      fill="url(#paint0_linear_1179_7)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1179_7"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="354"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.177083"
                          stop-color="white"
                          stop-opacity="0.2"
                        />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="absolute bottom-16 right-20">
                  <svg
                    width="85"
                    height="85"
                    viewBox="0 0 85 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M42.5 -1.85773e-06C65.9721 -2.88373e-06 85 19.0279 85 42.5C85 65.9721 65.9721 85 42.5 85C19.0279 85 -8.31736e-07 65.9721 -1.85773e-06 42.5C-2.88373e-06 19.0279 19.0279 -8.31736e-07 42.5 -1.85773e-06Z"
                      fill="url(#paint0_linear_1179_6)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1179_6"
                        x1="-1.85774e-06"
                        y1="42.5"
                        x2="85"
                        y2="42.5"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0.177083"
                          stop-color="white"
                          stop-opacity="0.16"
                        />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
