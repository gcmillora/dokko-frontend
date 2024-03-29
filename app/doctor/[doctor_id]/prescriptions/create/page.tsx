'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { d_findAllNoReports } from '../../../../../query/d_findAllNoReports';
import { insertOnePrescription } from '../../../../../query/insertOnePrescription';
import PrescriptionForm from '../../../../../components/forms/prescriptionValidation';
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
        <PrescriptionForm {...{ nogen_apps, selectedApp }} />
      </div>
    </div>
  );
}
