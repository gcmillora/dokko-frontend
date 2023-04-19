'use client';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import showToastMessage from '../../utils/error';
import { useEffect, useState } from 'react';
import { findOnePatient } from '../../api/findOnePatient';
import { findDoctors } from '../../api/findDoctors';
import { findAllAppointmentsByDoctor } from '../../api/findAllAppointmentsByDoctor';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { insertOneAppointment } from '../../api/insertOneAppointment';
import { start } from 'repl';

interface Props {
  patient_id: string;
}
export default function BookAppointment(props: { patient_id: string }) {
  const specialty = [
    'Dentist',
    'Dermatologist',
    'Orthopedist',
    'Pediatrician',
    'Psychiatrist',
    'Surgeon',
    'General Physician',
  ];

  let date = new Date();
  date.setHours(9, 0, 0, 0);
  const [startDate, setStartDate] = useState(date);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<any>();
  const [patient, setPatient] = useState<any>();
  const jwtToken = localStorage.getItem('jwtToken');
  const [typeOfVisit, setTypeOfVisit] = useState('In-Person');
  const [condition, setCondition] = useState('New');
  const [notes, setNotes] = useState('');
  const [generalPurpose, setGeneralPurpose] = useState('');
  const [appointmentsBooked, setAppointmentsBooked] = useState<any>([]);
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialty[0]);
  const [excludedTimes, setExcludedTimes] = useState<any[]>([]);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e: any) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleDoctorChange = (e: any) => {
    const doctor = doctors.find((doctor) => doctor.id === e.target.value);
    setSelectedDoctor(doctor);
  };

  useEffect(() => {
    if (jwtToken) {
      findDoctors(jwtToken, selectedSpecialty).then((data) => {
        setDoctors(data.doctors.data);
        setSelectedDoctor(data.doctors.data[0]);
      });
      findOnePatient(props.patient_id).then((data) => {
        setPatient(data.patients.data[0]);
      });
    }
  }, [selectedSpecialty]);

  useEffect(() => {
    if (jwtToken && selectedDoctor) {
      findAllAppointmentsByDoctor(
        selectedDoctor?.attributes.uid,
        jwtToken
      ).then((data) => {
        setAppointmentsBooked(data.appointments.data);
      });
    }
  }, [selectedDoctor]);

  useEffect(() => {
    setExcludedTimes(getExcludedTime(new Date()));
  }, [selectedDoctor, startDate]);

  //update excluded times when date changes
  useEffect(() => {
    setExcludedTimes(getExcludedTime(startDate));
  }, [selectedDoctor, startDate]);

  const getExcludedDates = () => {
    const excludedDates: Date[] = [];
    appointmentsBooked.forEach((appointment: any) => {
      excludedDates.push(new Date(appointment.attributes.appointmentDate));
    });
    return excludedDates;
  };

  const getExcludedTime = (date: any) => {
    let specificDates = getExcludedDates();
    let arrSpecificDates = [];
    let arrExcludedTimes = [];
    for (let i = 0; i < specificDates.length; i++) {
      if (specificDates[i].toDateString() === date.toDateString()) {
        arrSpecificDates.push(
          moment(specificDates[i], moment.ISO_8601).toObject()
        );
      }
    }
    for (let i = 0; i < specificDates.length; i++) {
      arrExcludedTimes.push(
        setHours(
          setMinutes(new Date(), arrSpecificDates[i]?.minutes),
          arrSpecificDates[i]?.hours
        )
      );
      setExcludedTimes(arrExcludedTimes);
    }
    return arrExcludedTimes;
  };

  const onSubmit = async (data: any) => {
    const response = await insertOneAppointment(
      jwtToken as string,
      patient.id,
      selectedDoctor?.id,
      startDate,
      data.typeOfVisit,
      data.condition,
      data.additionalNotes,
      data.generalPurpose
    );
    showToastMessage('success', 'Appointment booked successfully.');
    setStartDate(date);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8">
          <div className="">
            <div className="mt-6">
              <label className="text-base text-body-color ">Specialty*</label>
              <select className="text-field-normal" onChange={handleChange}>
                {specialty.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">Doctor Name*</label>
              {doctors.length != 0 ? (
                <select
                  className="text-field-normal"
                  onChange={handleDoctorChange}
                >
                  {doctors.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.attributes.fullName}
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  className="text-field-normal"
                  disabled
                  onChange={handleDoctorChange}
                >
                  <option value="No doctors available">
                    No doctors available
                  </option>
                </select>
              )}
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">Condition*</label>
              <input
                className="text-field-normal"
                type="text"
                {...register('condition', { required: true })}
                placeholder="Condition"
              />
              {errors.condition && errors.condition.type === 'required' && (
                <p className="text-danger text-xs mb-4">
                  Condition is required.
                </p>
              )}
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">Schedule*</label>
              <DatePicker
                className="text-field-normal text-body-color"
                selected={startDate}
                excludeTimes={excludedTimes}
                onChange={(date) => setStartDate(date || new Date())}
                onSelect={(date) => setStartDate(date || new Date())}
                minDate={new Date()} // only allow future dates
                minTime={setHours(setMinutes(new Date(), 0), 8)} // only allow 8am - 5pm
                maxTime={setHours(setMinutes(new Date(), 0), 17)}
                showTimeSelect
                timeFormat="p"
                timeIntervals={60}
                dateFormat="Pp"
                required
              />
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">
                Type of Visit*
              </label>
              <input
                type="text"
                className="text-field-normal"
                placeholder="Physical or Virtual"
                {...register('typeOfVisit', {
                  required: true,
                  validate: (value, formValues) =>
                    value === 'Virtual' || value === 'Physical',
                })}
              />
              {errors.typeOfVisit &&
                errors.typeOfVisit.type === 'required' && ( // eslint-disable-line
                  <p className="text-danger text-xs mb-4">
                    Type of Visit is required.
                  </p>
                )}
              {errors.typeOfVisit &&
                errors.typeOfVisit.type === 'validate' && ( // eslint-disable-line
                  <p className="text-danger text-xs mb-4">
                    Type of Visit should be Virtual or Physical.
                  </p>
                )}
            </div>
          </div>
          <div>
            <div className="mt-6">
              <label className="text-base text-body-color ">
                General Purpose*
              </label>
              <input
                className="text-field-normal"
                type="text"
                placeholder="General Checkup, Vaccination, etc."
                {...register('generalPurpose', { required: true })}
              />
              {errors.generalPurpose &&
                errors.generalPurpose.type === 'required' && ( // eslint-disable-line
                  <p className="text-danger text-xs mb-4">
                    General purpose is required.
                  </p>
                )}
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">
                Additional Notes
              </label>
              <textarea
                className="text-area-normal"
                rows={5}
                placeholder="Additional Notes"
                {...register('additionalNotes')}
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-row justify-center">
          <button className="continue-button w-1/2" type="submit">
            Book Appointment
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}
