'use client';
import { useState } from 'react';

import DatePicker from 'react-datepicker';

export default function Page() {
  const [value, onChange] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className="flex flex-row justify-center py-24">
        <div className="w-[524px]">
          <p className="text-center text-primary text-3xl font-bold">
            Book an Appointment
          </p>
          <p className="text-center text-body-color">
            Please fill-in all the details with *.
          </p>
          <div className="mt-6">
            <div>
              <label className="text-base text-body-color ">Doctor Name</label>
              <input className="text-field-normal" />
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">Condition</label>
              <input className="text-field-normal" />
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">Schedule</label>

              <DatePicker
                className="text-field-normal text-body-color"
                selected={startDate}
                onChange={(date) => setStartDate(date || new Date())}
                locale="pt-BR"
                showTimeSelect
                timeFormat="p"
                timeIntervals={60}
                dateFormat="Pp"
              />
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">
                Type of Visit
              </label>
              <input className="text-field-normal" />
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">
                General Purpose
              </label>
              <input className="text-field-normal" />
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">
                Additional Notes
              </label>
              <textarea className="text-area-normal" rows={5} />
            </div>
          </div>
          <div className="mt-12">
            <button className="continue-button">Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}
