'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { d_findAllNoReports } from '../../../../../api/d_findAllNoReports';
import { insertOnePrescription } from '../../../../../api/insertOnePrescription';
import showToastMessage from '../../../../../utils/error';

interface pageProps {
  params: {
    doctor_id: string;
  };
}

export default function Page({ params }: pageProps) {
  const [nogen_apps, setNogenApps] = useState<any>([]);
  const [selectedApp, setSelectedApp] = useState<any>();
  const [prescription, setPrescription] = useState('');
  const [notes, setNotes] = useState('');
  const [diagnoses, setDiagnoses] = useState('');

  const jwtToken = localStorage.getItem('jwtToken') || '';

  useEffect(() => {
    d_findAllNoReports(params.doctor_id, jwtToken).then((response) => {
      setNogenApps(response.appointments.data);
      setSelectedApp(response.appointments.data[0]);
      console.log(response.appointments.data);
    });
  }, []);

  const handleAppChange = (e: any) => {
    const sel = nogen_apps.find((app: any) => app.id === e.target.value);
    console.log(sel);
    setSelectedApp(sel);
  };
  const insertPrescription = async (e: any) => {
    console.log('inserting prescription');
    console.log(jwtToken);
    const appID = nogen_apps.find(
      (app: any) => app.attributes.uid === selectedApp.attributes.uid
    ).id;

    e.preventDefault();
    const data = {
      appointment_id: appID,
      doctor_id: selectedApp.attributes.doctor.data.id,
      patient_id: selectedApp.attributes.patient.data.id,
      prescription: prescription,
      notes: notes,
      diagnosis: diagnoses,
    };
    console.log(data);
    const response = await insertOnePrescription(
      jwtToken,
      data.patient_id,
      data.doctor_id,
      data.prescription,
      true,
      data.appointment_id,
      data.notes,
      data.diagnosis
    );
    console.log(response);
    showToastMessage('success', 'Report generated successfully.');
  };

  return (
    <div className="flex flex-row justify-center py-16">
      <div className="w-[524px]">
        <p>Select appointment: </p>
        <select
          className="text-field-normal"
          onChange={handleAppChange}
          onClick={handleAppChange}
        >
          {nogen_apps.map((app: any) => (
            <option value={app.id} key={app}>
              #{app.id} - {app.attributes.patient.data.attributes.fullName} -{' '}
              {app.attributes.typeOfVisit}
            </option>
          ))}
        </select>
        <p>Condition</p>
        <input
          className="text-field-normal"
          disabled
          value={selectedApp?.attributes.condition}
        />
        <p>General Purpose</p>
        <input
          className="text-field-normal"
          disabled
          value={selectedApp?.attributes.generalPurpose}
        />
        <form>
          <p>Diagnoses</p>
          <textarea
            className="text-field-normal"
            rows={3}
            value={diagnoses}
            onChange={(e) => setDiagnoses(e.target.value)}
          />
          <p>Prescription</p>
          <textarea
            className="text-field-normal"
            rows={5}
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
          />
          <p>Notes</p>
          <textarea
            className="text-field-normal"
            rows={5}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <button className="continue-button" onClick={insertPrescription}>
            Generate Report
          </button>
        </form>
      </div>
    </div>
  );
}
