export default function PastAppointmentsTable() {
  return (
    <div className="mx-auto ">
      <div className="rounded-lg border border-stroke bg-white">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto rounded-lg">
            <thead>
              <tr className="border-b border-stroke">
                <th className="min-w-[260px] py-5 pr-4 pl-9">
                  <p className="text-left text-base font-medium text-black">
                    Customer
                  </p>
                </th>
                <th className="min-w-[260px] py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Product
                  </p>
                </th>
                <th className="min-w-[160px] py-5 px-4">
                  <p className="text-left text-base font-medium text-black">
                    Order Number
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
                <th className="min-w-[200px] py-5 pl-4 pr-9">
                  <p className="text-right text-base font-medium text-black">
                    Confirmation
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
                  <p className="text-sm text-body-color">musharof@gmail.com</p>
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
                    Confirm Order
                  </button>
                </td>
              </tr>

              <tr className="border-b border-stroke">
                <td className="py-6 pr-4 pl-9">
                  <h5 className="text-base font-medium text-body-color">
                    Shafiq Hammad
                  </h5>
                  <p className="text-sm text-body-color">shafiq@gmail.com</p>
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
                    Confirm Order
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
  );
}
