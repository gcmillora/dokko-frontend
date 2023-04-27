'use client';

import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ToastContainer } from 'react-toastify';
import { findOneMedicalRecord } from '../../../../../api/findOneMedicalRecord';
import { updateMedicalRecord } from '../../../../../api/updateOneMedicalRecord';
import showToastMessage from '../../../../../utils/error';

interface pageProps {
  params: { patient_id: string; patient_mr_id: string };
}
export default function Page({ params }: pageProps) {
  const [sex, setSex] = useState('Male');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [birthdate, setBirthdate] = useState<any>();
  const [bloodtype, setBloodtype] = useState('A');
  const [allergies, setAllergies] = useState('');
  const [medicalRecord, setMedicalRecord] = useState<any>();
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: any) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const uploadProfile = async (e: any) => {
    if (file) {
      var formdata = new FormData();
      formdata.append('ref', 'api::patient.patient');
      formdata.append('refId', '3');
      formdata.append('field', 'profilepicture');
      formdata.append('files', file, file?.name);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('http://localhost:1337/api/upload', {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
    } else alert('No file');
  };
  const saveMedicalRecord = async (e: any) => {
    //save medical record using graphl
    e.preventDefault();
    console.log('save');
    const data = {
      id: medicalRecord.attributes.id,
      sex: sex,
      weight: weight,
      height: height,
      birthdate: birthdate,
      bloodtype: bloodtype,
      allergies: allergies,
    };
    const response = await updateMedicalRecord(data);
    console.log(
      data.id,
      data.sex,
      data.weight,
      data.height,
      data.birthdate,
      data.bloodtype,
      data.allergies
    );
    if (response) showToastMessage('success', 'Medical record updated.');
  };
  useEffect(() => {
    const getMedicalRecord = async () => {
      const response = await findOneMedicalRecord(params.patient_mr_id);
      setMedicalRecord(response.medicalRedicords.data[0]);
      console.log(response.medicalRedicords.data[0]);
    };
    getMedicalRecord();
  }, []);

  useEffect(() => {
    if (medicalRecord) {
      setSex(medicalRecord.attributes.sex);
      setWeight(medicalRecord.attributes.weight);
      setHeight(medicalRecord.attributes.height);
      setBirthdate(medicalRecord.attributes.birthdate);
      setAllergies(medicalRecord.attributes.allergies);
      setBloodtype(medicalRecord.attributes.bloodtype);
    }
  }, [medicalRecord]);
  return (
    <div>
      <div className="px-16  mt-16 ">
        <div className="border-stroke border-b flex flex-row justify-end">
          <div className="w-3/4">
            <p className="mb-2 text-2xl font-semibold text-black">
              Medical Record
            </p>
            <p className="text-body-color mb-6 text-sm font-medium">
              Please fill-in the records below to save your medical record. This
              will be used to generate your medical report and have a better
              understanding of your health.
            </p>
          </div>
          <div className="w-1/4 ">
            <button className="continue-button" onClick={saveMedicalRecord}>
              Save
            </button>
            <ToastContainer />
          </div>
        </div>
        <div>
          <div className="mt-8">
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-8">
                <div className="">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-base font-semibold text-black"
                    >
                      Sex
                    </label>
                    <select
                      className="text-field-normal"
                      value={sex}
                      onChange={(e) => setSex(e.target.value)}
                    >
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="w-1/2 grid grid-cols-2 mt-4 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-base font-semibold text-black"
                      >
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        name="name"
                        value={weight?.toString()}
                        min="0"
                        onChange={(e) => setWeight(parseInt(e.target.value))}
                        className="text-field-normal"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-base font-semibold text-black"
                      >
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        name="name"
                        value={height?.toString()}
                        min="0"
                        onChange={(e) => setHeight(parseInt(e.target.value))}
                        className="text-field-normal"
                      />
                    </div>
                  </div>
                  <div className=" mt-4">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-base font-semibold text-black"
                    >
                      Birthdate
                    </label>
                    <DatePicker
                      selected={birthdate}
                      onChange={(date) => setBirthdate(date || new Date())}
                      className="text-field-normal"
                      maxDate={new Date()}
                      minDate={new Date(1900, 1, 1)}
                      dateFormat="Pp"
                    />
                  </div>

                  <div className=" mt-4">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-base font-semibold text-black"
                    >
                      Blood Type
                    </label>
                    <select
                      className="text-field-normal"
                      value={bloodtype || 'A'}
                      onChange={(e) => setBloodtype(e.target.value)}
                    >
                      <option>A</option>
                      <option>B</option>
                      <option>AB</option>
                      <option>O</option>
                    </select>
                  </div>
                </div>
                <div>
                  <div className="w-full">
                    <label
                      className="mb-2 block text-base font-semibold text-black"
                      htmlFor="name"
                    >
                      Allergies
                    </label>
                    <textarea
                      onChange={(e) => setAllergies(e.target.value)}
                      className="text-field-normal"
                      rows={5}
                    >
                      {allergies}
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
