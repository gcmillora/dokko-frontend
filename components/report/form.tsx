export default function ReportsForm(props: any) {
  console.log(props);
  return (
    <div className="mt-10 divide-y-2 divide-slate-200">
      <div className="flex flex-row justify-between px-5 py-6">
        <div className="text-2xl ">
          <p>Prescription {props.id}</p>
          <p className="text-sm">{props.appointmentDate}</p>
        </div>
      </div>
      <div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-6 mt-6">
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Full Name
            </label>
            <input
              type="text"
              placeholder=""
              value={props.fullName}
              disabled
              className="border-form-stroke w-full text-body-color placeholder-body-color focus:border-primary active:border-primary  rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-6 mt-3">
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Condition
            </label>
            <input
              type="text"
              placeholder=""
              disabled
              value={props.condition}
              className="border-form-stroke w-full text-body-color placeholder-body-color focus:border-primary active:border-primary  rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="">
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Prescription
            </label>
            <textarea
              rows={5}
              placeholder="Default textarea"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="">
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Additional Notes
            </label>
            <textarea
              rows={5}
              placeholder="Default textarea"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
            ></textarea>
          </div>
        </div>
        <div className="text-base font-normal text-primary pt-6 px-5 ">
          <a href="">Generate Document File</a>
        </div>
        <div className="pt-6 px-5 flex space-x-4">
          <button className="bg-secondary inline-flex items-center justify-center rounded-md py-3 px-10 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
