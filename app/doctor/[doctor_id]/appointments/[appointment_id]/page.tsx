'use client';

import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { findOneAppointment } from '../../../../../api/findOneAppointment';
import { insertPrescriptionDoctor } from '../../../../../api/insertPrescriptionDoctor';
import { updateOneAppointment } from '../../../../../api/updateOneAppointment';
import { searchPrescription } from '../../../../../api/searchPrescription';
import showToastMessage from '../../../../../utils/error';

interface pageProps {
  params: {
    doctor_id: string;
    appointment_id: string;
  };
}

export default function Page({ params }: pageProps) {
  const [appointment, setAppointment] = useState<any>();
  const jwtToken = localStorage.getItem('jwtToken') || '';
  const [exist, setExist] = useState(false);

  const approveAppointment = async (e: any) => {
    //save medical record using graphl
    e.preventDefault();
    console.log('save');
    const data = {
      id: appointment.id,
      active: true,
      condition: appointment.attributes.condition,
      generalPurpose: appointment.attributes.generalPurpose,
      notes: appointment.attributes.notes,
      typeOfVisit: appointment.attributes.typeOfVisit,
    };
    const response = await updateOneAppointment(appointment.id, jwtToken, data);
    console.log(response);
    showToastMessage('success', 'Appointment approved.');
  };

  const declineAppointment = async (e: any) => {
    //save medical record using graphl
    e.preventDefault();
    console.log('save');
    const data = {
      id: appointment.id,
      active: false,
      condition: appointment.attributes.condition,
      generalPurpose: appointment.attributes.generalPurpose,
      notes: appointment.attributes.notes,
      typeOfVisit: appointment.attributes.typeOfVisit,
    };
    const response = await updateOneAppointment(appointment.id, jwtToken, data);
    console.log(response);
    showToastMessage('error', 'Appointment declined.');
  };

  useEffect(() => {
    const getAppointment = async () => {
      const response = await findOneAppointment(
        params.appointment_id,
        jwtToken
      );
      setAppointment(response.appointments.data[0]);
    };
    getAppointment();
    const search = async () => {
      const response = await searchPrescription(params.appointment_id);
      console.log(response);
      if (response.prescriptions.data.length > 0) {
        setExist(true);
      }
    };
    search();
  }, []);

  useEffect(() => {
    console.log(appointment);
    if (exist) {
      setExist(true);
    }
  }, []);

  const createPrescription = async (e: any) => {
    //insert one prescription with only uid
    e.preventDefault();
    console.log('create prescription');
    const data = {
      appointment_id: appointment.id,
      doctor_id: appointment.attributes.doctor.data.id,
      patient_id: appointment.attributes.patient.data.id,
    };

    const response = await insertPrescriptionDoctor(
      data.appointment_id,
      data.doctor_id,
      data.patient_id
    );
    console.log(response);
  };

  return (
    <div>
      <div className="px-16 mt-16">
        <div className="border-stroke border-b flex flex-row justify-end">
          <div className="w-3/4">
            <p className="mb-2 text-2xl font-semibold text-black">
              Appointment
            </p>
            <p className="text-body-color mb-6 text-sm font-medium">
              Details of the appointment with the patient, including the
              condition and general purpose of the appointment. Confirm the
              appointment to proceed or decline to cancel the appointment.
            </p>
          </div>
          <div className="w-1/4 ">
            <button
              className={exist ? 'disabled-button' : 'continue-button'}
              onClick={createPrescription}
              disabled={exist ? true : false}
            >
              Create Report
            </button>
          </div>
        </div>
        <div>
          <div className="mt-8">
            <div className="mb-4">
              <div className="flex flex-col">
                <div className="w-1/2">
                  <label
                    htmlFor="name"
                    className="text-body-color text-base font-medium mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={
                      appointment?.attributes?.patient?.data?.attributes
                        ?.fullName
                    }
                    className="text-field-normal"
                    disabled
                  ></input>
                </div>
                <div className="w-1/2 mt-4">
                  <label
                    htmlFor="name"
                    className="text-body-color text-base font-medium mb-2"
                  >
                    Date of Appointment
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={new Date(
                      appointment?.attributes?.appointmentDate
                    ).toLocaleString()}
                    className="text-field-normal"
                    disabled
                  ></input>
                </div>
                <div className="w-1/2 mt-4">
                  <label
                    htmlFor="name"
                    className="text-body-color text-base font-medium mb-2"
                  >
                    Condition
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={appointment?.attributes?.condition}
                    className="text-field-normal"
                    disabled
                  ></input>
                </div>
                <div className="w-1/2 mt-4">
                  <label
                    htmlFor="name"
                    className="text-body-color text-base font-medium mb-2"
                  >
                    General Purpose
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={appointment?.attributes?.generalPurpose}
                    className="text-field-normal"
                    disabled
                  ></input>
                </div>
                <div className="w-1/2 mt-4">
                  <label
                    htmlFor="name"
                    className="text-body-color text-base font-medium mb-2"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    value={appointment?.attributes?.notes}
                    className="text-field-normal"
                    disabled
                    rows={5}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-row mb-8">
          <button className="approve-button mr-8" onClick={approveAppointment}>
            Approve
          </button>
          <button className="decline-button" onClick={declineAppointment}>
            Decline
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
