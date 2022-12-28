export default function Calendar() {
  return (
    <section className="relative z-10 bg-white py-[120px]">
      <div className="mx-auto px-4 lg:container">
        <div className="mb-[30px] flex items-center justify-between rounded-lg border border-stroke bg-gray p-4 pl-5">
          <p className="text-base font-semibold text-black sm:text-xl">
            December 2025
          </p>
          <div className="relative z-20 inline-flex rounded bg-white">
            <select
              name=""
              id=""
              className="relative z-20 h-11 appearance-none rounded border border-stroke bg-transparent pr-9 pl-5 outline-none"
            >
              <option value="">Week</option>
              <option value="">Month</option>
              <option value="">Year</option>
            </select>
            <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.49652 5.57195C5.29784 5.57195 5.09917 5.50239 4.93361 5.34588L0.496609 0.963677C0.380718 0.841949 0.380718 0.650662 0.480054 0.528935C0.595945 0.407207 0.778061 0.407207 0.893953 0.511545L5.33096 4.89375C5.41374 4.9807 5.56274 4.9807 5.66208 4.89375L10.0991 0.511545C10.215 0.389817 10.3971 0.407207 10.513 0.528935C10.6289 0.650662 10.6123 0.841949 10.4964 0.963677L6.05942 5.32849C5.89386 5.485 5.69519 5.57195 5.49652 5.57195Z"
                  fill="#212B36"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.65444 5.65773L0.212873 1.27101L0.208441 1.26636C-0.0635564 0.980663 -0.0621445 0.535609 0.170632 0.250361L0.180818 0.237879L0.191885 0.226255C0.463883 -0.0594399 0.887599 -0.0579557 1.15917 0.186543L1.16629 0.192953L5.49652 4.4697L9.81622 0.203348C10.1204 -0.109866 10.5585 -0.0286158 10.8011 0.226255C11.1055 0.545928 11.0287 1.01 10.7846 1.26636L10.7799 1.27131L6.3321 5.64672C6.10301 5.86329 5.8101 6 5.49652 6C5.20451 6 4.90666 5.89629 4.66099 5.66405L4.65444 5.65773ZM10.0991 0.511545L5.66208 4.89375C5.56274 4.9807 5.41374 4.9807 5.33096 4.89375L0.893953 0.511545C0.778061 0.407207 0.595945 0.407207 0.480054 0.528935C0.380718 0.650662 0.380718 0.841949 0.496609 0.963677L4.93361 5.34588C5.09917 5.50239 5.29784 5.57195 5.49652 5.57195C5.69519 5.57195 5.89386 5.485 6.05942 5.32849L10.4964 0.963677C10.6123 0.841949 10.6289 0.650662 10.513 0.528935C10.3971 0.407207 10.215 0.389817 10.0991 0.511545Z"
                  fill="#212B36"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="w-full max-w-full bg-white">
          <table className="w-full">
            <thead>
              <tr className="rounded-t bg-primary text-white">
                <th className="h-10 w-10 rounded-tl p-2 text-xs lg:w-28 xl:text-sm 2xl:w-40">
                  <span className="hidden lg:block"> Sunday </span>
                  <span className="block lg:hidden"> Sun </span>
                </th>
                <th className="h-10 w-10 p-2 text-xs lg:w-28 xl:text-sm 2xl:w-40">
                  <span className="hidden lg:block"> Monday </span>
                  <span className="block lg:hidden"> Mon </span>
                </th>
                <th className="h-10 w-10 p-2 text-xs lg:w-28 xl:text-sm 2xl:w-40">
                  <span className="hidden lg:block"> Tuesday </span>
                  <span className="block lg:hidden"> Tue </span>
                </th>
                <th className="h-10 w-10 p-2 text-xs lg:w-28 xl:text-sm 2xl:w-40">
                  <span className="hidden lg:block"> Wednesday </span>
                  <span className="block lg:hidden"> Wed </span>
                </th>
                <th className="h-10 w-10 p-2 text-xs lg:w-28 xl:text-sm 2xl:w-40">
                  <span className="hidden lg:block"> Thursday </span>
                  <span className="block lg:hidden"> Thur </span>
                </th>
                <th className="h-10 w-10 p-2 text-xs lg:w-28 xl:text-sm 2xl:w-40">
                  <span className="hidden lg:block"> Friday </span>
                  <span className="block lg:hidden"> Fri </span>
                </th>
                <th className="h-10 w-10 rounded-tr p-2 text-xs lg:w-28 xl:text-sm 2xl:w-40">
                  <span className="hidden lg:block"> Saturday </span>
                  <span className="block lg:hidden"> Sat </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-20 text-center">
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">1</span>
                    </div>
                    <div className="bottom md:h-30 group h-16 w-full flex-grow cursor-pointer py-1">
                      <span className="group-hover:text-primary md:hidden">
                        More
                      </span>
                      <div className="event invisible absolute left-2 mb-1 w-[200%] rounded border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 md:visible md:w-[190%] md:opacity-100">
                        <span className="event-name text-sm font-semibold text-black">
                          Redesign Website
                        </span>
                        <span className="time text-sm font-medium text-black">
                          1 Dec - 2 Dec
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">2</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">3</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">4</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">6</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease h-28 w-10 cursor-pointer overflow-hidden border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">7</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500 text-sm">8</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 text-center">
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">9</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">10</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">12</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">13</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">14</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">15</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500 text-sm">16</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 text-center">
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">16</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">17</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">18</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">19</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">20</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">21</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500 text-sm">22</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 text-center">
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">23</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">24</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">25</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">26</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">27</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">28</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500 text-sm">29</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
              </tr>
              <tr className="h-20 text-center">
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">30</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease hover:bg-gray-300 relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">31</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">1</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">2</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">3</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500">4</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
                <td className="ease relative h-28 w-10 cursor-pointer border border-stroke p-1 transition duration-500 md:h-40 lg:w-28 2xl:w-40">
                  <div className="mx-auto flex h-24 w-10 flex-col overflow-hidden sm:w-full md:h-40 md:w-20 lg:w-28 2xl:w-40">
                    <div className="top h-5 w-full">
                      <span className="text-gray-500 text-sm">5</span>
                    </div>
                    <div className="bottom md:h-30 h-16 w-full flex-grow cursor-pointer py-1"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
