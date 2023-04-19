'use client';
import { useEffect, useState } from 'react';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import moment from 'moment';

import DatePicker from 'react-datepicker';
import { findDoctors } from '../../../../../api/findDoctors';
import { findOnePatient } from '../../../../../api/findOnePatient';
import { insertOneAppointment } from '../../../../../api/insertOneAppointment';
import { findAllAppointmentsByDoctor } from '../../../../../api/findAllAppointmentsByDoctor';
import showToastMessage from '../../../../../utils/error';
import { ToastContainer } from 'react-toastify';
import BookAppointment from '../../../../../components/forms/bookValidation';

interface pageProps {
  params: { patient_id: string };
}

export default function Page({ params }: pageProps) {
  return (
    <div className="flex flex-col justify-center py-16 px-24">
      <div className="w-full ">
        <p className="text-center text-color-black text-3xl font-black">
          Book an Appointment
        </p>
        <p className="text-center text-body-color">
          Please fill-in all the details with *.
        </p>
      </div>
      <BookAppointment patient_id={params.patient_id} />
    </div>
  );
}
