export default function AppointmentsTable() {
  return (
    <div className="container">
      <div className="text-2xl px-6 py-6 mt-10 p font-semibold">
        Appointments
      </div>
      <section className="bg-white ">
        <div className="mx-auto px-4 lg:container">
          <div className="mb-8 items-center justify-between rounded-lg bg-[#F8F9FD] py-4 px-5 md:flex">
            <div className="mb-4 w-full md:mb-0 md:max-w-[220px] lg:max-w-[415px]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="h-[50px] w-full rounded-lg border border-stroke bg-white pr-6 pl-14 text-base text-body-color outline-none"
                />
                <span className="absolute left-6 top-1/2 -translate-y-1/2">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z"
                      fill="#637381"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.957 11.958C12.2499 11.6651 12.7247 11.6651 13.0176 11.958L16.2801 15.2205C16.573 15.5133 16.573 15.9882 16.2801 16.2811C15.9872 16.574 15.5124 16.574 15.2195 16.2811L11.957 13.0186C11.6641 12.7257 11.6641 12.2508 11.957 11.958Z"
                      fill="#637381"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="w-full">
              <div className="items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 md:justify-end">
                <button className="flex h-[50px] items-center justify-center rounded-md border border-stroke bg-white px-5">
                  <span className="mr-2">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 2.25L17.2636 2.89573C17.515 2.59845 17.571 2.18229 17.4071 1.82912C17.2433 1.47596 16.8893 1.25 16.5 1.25V2.25ZM1.5 2.25V1.25C1.11067 1.25 0.756741 1.47596 0.592882 1.82912C0.429024 2.18229 0.485033 2.59845 0.73643 2.89573L1.5 2.25ZM7.5 9.345H8.5C8.5 9.10858 8.41623 8.8798 8.26357 8.69928L7.5 9.345ZM7.5 14.25H6.5C6.5 14.6288 6.714 14.975 7.05279 15.1444L7.5 14.25ZM10.5 15.75L10.0528 16.6444C10.3628 16.7994 10.7309 16.7829 11.0257 16.6007C11.3205 16.4184 11.5 16.0966 11.5 15.75H10.5ZM10.5 9.345L9.73643 8.69928C9.58377 8.8798 9.5 9.10858 9.5 9.345H10.5ZM16.5 1.25H1.5V3.25H16.5V1.25ZM0.73643 2.89573L6.73643 9.99073L8.26357 8.69928L2.26357 1.60427L0.73643 2.89573ZM6.5 9.345V14.25H8.5V9.345H6.5ZM7.05279 15.1444L10.0528 16.6444L10.9472 14.8556L7.94721 13.3556L7.05279 15.1444ZM11.5 15.75V9.345H9.5V15.75H11.5ZM11.2636 9.99073L17.2636 2.89573L15.7364 1.60427L9.73643 8.69928L11.2636 9.99073Z"
                        fill="#637381"
                      />
                    </svg>
                  </span>
                  Filter
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-stroke bg-white">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto rounded-lg">
                <thead>
                  <tr className="border-b border-stroke">
                    <th className="min-w-[260px] py-5 pr-4 pl-9">
                      <p className="text-left text-base font-medium text-black">
                        Patient
                      </p>
                    </th>
                    <th className="min-w-[260px] py-5 px-4">
                      <p className="text-left text-base font-medium text-black">
                        Condition
                      </p>
                    </th>
                    <th className="min-w-[160px] py-5 px-4">
                      <p className="text-left text-base font-medium text-black">
                        Record
                      </p>
                    </th>
                    <th className="min-w-[170px] py-5 px-4">
                      <p className="text-left text-base font-medium text-black">
                        Date
                      </p>
                    </th>
                    <th className="min-w-[150px] py-5 px-4">
                      <p className="text-left text-base font-medium text-black">
                        Status
                      </p>
                    </th>
                    <th className="min-w-[160px] py-5 pl-4 pr-9">
                      <p className="text-right text-base font-medium text-black">
                        Action
                      </p>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b border-stroke">
                    <td className="py-6 pr-4 pl-9">
                      <h5 className="text-base font-medium text-body-color">
                        Musharof Chowdhury
                      </h5>
                      <p className="text-sm text-body-color">
                        musharof@gmail.com
                      </p>
                    </td>

                    <td className="py-6 px-4">
                      <h5 className="text-base font-medium text-body-color">
                        Apple Macbook Pro M1
                      </h5>
                      <p className="text-sm text-body-color">8/256 GB</p>
                    </td>

                    <td className="py-6 px-4">
                      <p className="text-base text-body-color">#WE234343</p>
                    </td>
                    <td className="py-6 px-4">
                      <p className="text-base text-body-color">25 Dec 2024</p>
                    </td>
                    <td className="py-6 px-4">
                      <p className="inline-flex items-center justify-center rounded-full bg-[#FFA70B] bg-opacity-10 py-1 px-[14px] text-sm font-medium text-[#FFA70B]">
                        <span className="mr-2 block h-2 w-2 rounded-full bg-[#FFA70B]"></span>
                        Pending
                      </p>
                    </td>
                    <td className="py-6 pl-4 pr-9 text-right">
                      <button className="inline-flex items-center justify-center rounded border border-primary py-2 px-4 text-base font-medium text-primary hover:bg-primary hover:text-white">
                        . . .
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b border-stroke">
                    <td className="py-6 pr-4 pl-9">
                      <h5 className="text-base font-medium text-body-color">
                        Shafiq Hammad
                      </h5>
                      <p className="text-sm text-body-color">
                        shafiq@gmail.com
                      </p>
                    </td>

                    <td className="py-6 px-4">
                      <h5 className="text-base font-medium text-body-color">
                        iPhone 13 Pro Max
                      </h5>
                      <p className="text-sm text-body-color">4/256 GB</p>
                    </td>

                    <td className="py-6 px-4">
                      <p className="text-base text-body-color">#WE234343</p>
                    </td>
                    <td className="py-6 px-4">
                      <p className="text-base text-body-color">25 Dec 2024</p>
                    </td>
                    <td className="py-6 px-4">
                      <p className="inline-flex items-center justify-center rounded-full bg-[#FFA70B] bg-opacity-10 py-1 px-[14px] text-sm font-medium text-[#FFA70B]">
                        <span className="mr-2 block h-2 w-2 rounded-full bg-[#FFA70B]"></span>
                        Pending
                      </p>
                    </td>
                    <td className="py-6 pl-4 pr-9 text-right">
                      <button className="inline-flex items-center justify-center rounded border border-primary py-2 px-4 text-base font-medium text-primary hover:bg-primary hover:text-white">
                        . . .
                      </button>
                    </td>
                  </tr>

                  <tr className="border-b border-stroke">
                    <td className="py-6 pr-4 pl-9">
                      <h5 className="text-base font-medium text-body-color">
                        Naimur Rahman
                      </h5>
                      <p className="text-sm text-body-color">naim@gmail.com</p>
                    </td>

                    <td className="py-6 px-4">
                      <h5 className="text-base font-medium text-body-color">
                        Apple watch series 7
                      </h5>
                    </td>

                    <td className="py-6 px-4">
                      <p className="text-base text-body-color">#WE234343</p>
                    </td>
                    <td className="py-6 px-4">
                      <p className="text-base text-body-color">25 Dec 2024</p>
                    </td>
                    <td className="py-6 px-4">
                      <p className="inline-flex items-center justify-center rounded-full bg-[#D34053] bg-opacity-10 py-1 px-[14px] text-sm font-medium text-[#D34053]">
                        <span className="mr-2 block h-2 w-2 rounded-full bg-[#D34053]"></span>
                        Cancelled
                      </p>
                    </td>
                    <td className="py-6 pl-4 pr-9 text-right"></td>
                  </tr>

                  <tr className="border-b border-transparent">
                    <td className="py-6 pr-4 pl-9">
                      <h5 className="text-base font-medium text-body-color">
                        Jhon Smith
                      </h5>
                      <p className="text-sm text-body-color">smith@gmail.com</p>
                    </td>

                    <td className="py-6 px-4">
                      <h5 className="text-base font-medium text-body-color">
                        Apple Macbook air M1
                      </h5>
                      <p className="text-sm text-body-color">8/256 GB</p>
                    </td>

                    <td className="py-6 px-4">
                      <p className="text-base text-body-color">#WE234343</p>
                    </td>
                    <td className="py-6 px-4">
                      <p className="text-base text-body-color">25 Dec 2024</p>
                    </td>
                    <td className="py-6 px-4">
                      <p className="inline-flex items-center justify-center rounded-full bg-success bg-opacity-10 py-1 px-[14px] text-sm font-medium text-success">
                        <span className="mr-2 block h-2 w-2 rounded-full bg-success"></span>
                        Shipped
                      </p>
                    </td>
                    <td className="py-6 pl-4 pr-9 text-right"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
