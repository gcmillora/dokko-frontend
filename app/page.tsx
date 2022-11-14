'use client';

import { ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function Page() {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
        </div>
        <div>
          <p className="text-4xl text-center mt-6 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </p>
          <p className="text-center text-2xl mt-2 tracking-tight text-gray-900">
            Hello. Welcome back! 👋
          </p>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="my-5">
              <p>Email address</p>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              ></input>
            </div>
            <div className="my-5">
              <p>Password</p>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
