'use client';

import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <section className="overflow-hidden bg-white h-full lg:py-[160px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative z-10 mx-auto w-full max-w-[470px]">
              <div className="bg-primary py-10 px-6 text-center sm:p-[70px]">
                <div className="mx-auto mb-5 max-w-[160px] text-center flex">
                  <img
                    src="https://res.cloudinary.com/ddfbgrq44/image/upload/v1669311884/dokko-white_xmz8y3.png"
                    alt="logo"
                    style={{ width: '40px', height: '40px' }}
                  />

                  <p className="mx-auto align-middle text-white text-4xl">
                    dokko
                  </p>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white sm:text-[28px]">
                  Sign in to your account
                </h3>
                <p className="mb-7 text-base font-medium text-white text-opacity-70">
                  Welcome back!
                </p>
                <form>
                  <div className="-mx-2 flex flex-wrap text-left">
                    <div className="w-full px-2">
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-white"
                        >
                          Username or Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          placeholder="exam@mail.com"
                          className="placeholder-white border-form-stroke w-full border bg-transparent p-3 text-base font-medium text-white placeholder-opacity-70 outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-2">
                      <div className="mb-8">
                        <label
                          htmlFor="password"
                          className="mb-2 block text-sm font-medium text-white"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="email"
                          placeholder="Enter your password"
                          className="placeholder-white border-form-stroke w-full border bg-transparent p-3 text-base font-medium text-white placeholder-opacity-70 outline-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-2">
                      <button className="text-primary flex w-full items-center justify-center bg-white py-[14px] px-14 text-base font-semibold">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
                <p className="pt-8 text-center text-base font-medium text-white">
                  Don't have an account?
                </p>
                <Link href="/signup" className="hover:underline">
                  <p className="text-white">Sign Up</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
