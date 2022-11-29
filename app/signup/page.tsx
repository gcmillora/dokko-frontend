'use client';

import Signup from './signup';

const Page = () => {
  return (
    <section className="bg-primary h-full lg:py-[160px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="border-form-stroke shadow-pricing mx-auto max-w-[630px] rounded-lg border bg-white py-10 px-6 sm:p-[70px]">
              <h3 className="mb-2 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl: text-3xl">
                Sign-up to <span className="text-primary">dokko</span>
              </h3>
              <p className="text-body-color text-base font-medium">
                Create your account to get started
              </p>
              <p className="text-body-color mb-7 text-base font-medium">
                Please fill-in the form below to create your account
              </p>
              <Signup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
