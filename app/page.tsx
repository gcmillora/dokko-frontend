'use client';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  return (
    <div className="h-screen flex flex-col">
      <div className="absolute left-0 top-0 z-50 w-full">
        <div className="container mx-auto">
          <div className="relative z-40 -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <a href="javascript:void(0)" className="block w-full py-5">
                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo.svg"
                  alt="logo"
                  className="w-full"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <nav className="absolute right-4 top-full z-40 w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none">
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="justify-end w-1/5 ">
              <button
                onClick={() => {
                  router.push('/signin');
                }}
                className="continue-button"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden bg-white pt-[120px] pb-[110px] md:pt-[150px] lg:pt-[180px] h-full">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="hero-content mx-auto max-w-[666px] text-center">
                <span className="text-primary mb-5 block text-base font-bold sm:text-lg md:text-xl">
                  Your Medical Practice Management System
                </span>
                <h1 className="text-dark mb-5 text-3xl font-bold capitalize leading-snug sm:text-[42px] sm:leading-snug xl:text-[50px] xl:leading-tight">
                  Simplifying virtual and hybrid care delivery for SME clinics.
                </h1>
                <p className="text-body-color mb-12 text-base font-medium md:text-lg">
                  Preserve and expand your services, increase revenue, and
                  enhance the patient experience with Dokko’s management
                  platform.
                </p>
                <ul className="flex flex-wrap items-center justify-center">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="bg-primary m-2 inline-flex items-center justify-center rounded-lg border border-transparent py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                    >
                      Know More
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="text-primary border-primary hover:bg-primary hover:border-primary m-2 inline-flex items-center justify-center rounded-md border py-4 px-6 text-center text-base transition hover:text-white sm:px-10 lg:px-8 xl:px-10"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 top-0 -z-10">
            <svg
              width="784"
              height="619"
              viewBox="0 0 784 619"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.05"
                x="343.762"
                y="-429.286"
                width="681.025"
                height="859.911"
                rx="101"
                transform="rotate(45 343.762 -429.286)"
                fill="url(#paint0_linear_1414_1006)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1414_1006"
                  x1="684.275"
                  y1="-429.286"
                  x2="650.39"
                  y2="509.923"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3056D3" />
                  <stop offset="1" stop-color="#3056D3" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-0 top-0 -z-10">
            <svg
              width="577"
              height="606"
              viewBox="0 0 577 606"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.05"
                x="880.642"
                y="206.506"
                width="619.809"
                height="680.424"
                rx="94"
                transform="rotate(135 880.642 206.506)"
                fill="url(#paint0_linear_1414_1005)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1414_1005"
                  x1="1190.55"
                  y1="206.506"
                  x2="1167.23"
                  y2="949.912"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3056D3" />
                  <stop offset="1" stop-color="#3056D3" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute bottom-0 left-1/2 -z-10">
            <svg
              width="695"
              height="363"
              viewBox="0 0 695 363"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.05"
                x="719.109"
                y="488.892"
                width="325.482"
                height="726.494"
                rx="60"
                transform="rotate(135 719.109 488.892)"
                fill="url(#paint0_linear_1414_1009)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1414_1009"
                  x1="881.85"
                  y1="488.892"
                  x2="831.383"
                  y2="1280.2"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3056D3" />
                  <stop offset="1" stop-color="#3056D3" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute bottom-0 left-1/4 -z-10">
            <svg
              width="469"
              height="139"
              viewBox="0 0 469 139"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                opacity="0.05"
                width="353.669"
                height="342.737"
                rx="30"
                transform="matrix(0.707107 0.707107 0.707107 -0.707107 -12 230.352)"
                fill="url(#paint0_linear_1414_1011)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1414_1011"
                  x1="176.834"
                  y1="3.18915e-07"
                  x2="166.463"
                  y2="374.543"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3056D3" />
                  <stop offset="1" stop-color="#3056D3" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
