'use client';
import { useEffect, useState } from 'react';

import DatePicker from 'react-datepicker';
import { findDoctors } from '../../../../../api/findDoctors';
import { findOnePatient } from '../../../../../api/findOnePatient';
import { insertOneAppointment } from '../../../../../api/insertOneAppointment';

interface pageProps {
  params: { patient_id: string };
}

export default function Page({ params }: pageProps) {
  const specialty = [
    'Dentist',
    'Dermatologist',
    'Gynecologist',
    'Neurologist',
    'Ophthalmologist',
    'Orthopedist',
    'Pediatrician',
    'Psychiatrist',
    'Surgeon',
  ];
  const [value, onChange] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [doctors, setDoctors] = useState<any[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<any>();
  const [patient, setPatient] = useState<any>();
  const jwtToken = localStorage.getItem('jwtToken');
  const [typeOfVisit, setTypeOfVisit] = useState('In-Person');
  const [condition, setCondition] = useState('New');
  const [notes, setNotes] = useState('');
  const [generalPurpose, setGeneralPurpose] = useState('');

  const [selectedSpecialty, setSelectedSpecialty] = useState(specialty[0]);

  useEffect(() => {
    if (jwtToken) {
      findDoctors(jwtToken, selectedSpecialty).then((data) => {
        setDoctors(data.doctors.data);
        setSelectedDoctor(data.doctors.data[0]);
      });
      findOnePatient(params.patient_id).then((data) => {
        setPatient(data.patients.data[0]);
      });
    }
  }, [selectedSpecialty]);

  const handleChange = (e: any) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleDoctorChange = (e: any) => {
    setSelectedDoctor(e.target.value);
  };

  const insertAppointment = async (e: any) => {
    e.preventDefault();
    console.log('patient_id: ', patient.id);
    console.log('doctor_id: ', selectedDoctor.id);
    const data = {
      patient_id: patient.id,
      doctor_id: selectedDoctor?.id,
      date: startDate,
      typeOfVisit: typeOfVisit,
      condition: condition,
      notes: notes,
      generalPurpose: generalPurpose,
    };
    const response = await insertOneAppointment(
      jwtToken as string,
      data.patient_id,
      data.doctor_id,
      data.date,
      data.typeOfVisit,
      data.condition,
      data.notes,
      data.generalPurpose
    );
    console.log(response);
  };

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
            <div className="mt-6">
              <label className="text-base text-body-color ">Specialty</label>
              <select className="text-field-normal" onChange={handleChange}>
                {specialty.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-base text-body-color ">Doctor Name</label>
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
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">Condition</label>
              <input
                className="text-field-normal"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              />
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
              <input
                className="text-field-normal"
                value={typeOfVisit}
                onChange={(e) => setTypeOfVisit(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">
                General Purpose
              </label>
              <input
                className="text-field-normal"
                value={generalPurpose}
                onChange={(e) => setGeneralPurpose(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <label className="text-base text-body-color ">
                Additional Notes
              </label>
              <textarea
                className="text-area-normal"
                rows={5}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-12">
            <button className="continue-button" onClick={insertAppointment}>
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
