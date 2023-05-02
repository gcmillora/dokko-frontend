'use client';
import { useEffect, useState } from 'react';
import { findOnePrescription } from '../../../../../query/patient/findOnePrescriptionByPatient';

interface pageProps {
  params: {
    patient_id: string;
    prescription_id: string;
  };
}

export default function Page({ params }: pageProps) {
  const [prescription, setPrescription] = useState<any>();
  //generate pdf using pdf generator api

  useEffect(() => {
    findOnePrescription(params.prescription_id).then((data) => {
      setPrescription(data.prescriptions.data[0]);
    });
  }, [params.prescription_id]);

  return (
    <div className="py-12 px-24 mt-12">
      <div className="grid grid-cols-2">
        <div>
          <div className="flex flex-col">
            <p className="text-3xl font-black">Medical Report</p>
            <span className="-pt-4 text-base text-body-color">{`ID#: ${prescription?.id}`}</span>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-col w-3/4">
              <p className="text-base font-semibold">Doctor</p>
              <div>
                <input
                  className="text-field-normal"
                  value={
                    prescription?.attributes.doctor.data.attributes.fullName
                  }
                  disabled
                ></input>
              </div>
            </div>
            <div className="flex flex-col w-3/4 mt-8">
              <p className="text-base font-semibold">Condition</p>
              <div>
                <input
                  className="text-field-normal"
                  value={
                    prescription?.attributes.appointment.data.attributes
                      .condition
                  }
                  disabled
                ></input>
              </div>
            </div>
            <div className="flex flex-col w-3/4 mt-8">
              <p className="text-base font-semibold">Diagnosis</p>
              <div>
                <input
                  className="text-field-normal"
                  value={prescription?.attributes.diagnosis}
                  disabled
                ></input>
              </div>
            </div>
            <div className="flex flex-col w-3/4 mt-8">
              <p className="text-base font-semibold">Prescription</p>
              <div>
                <input
                  className="text-field-normal"
                  value={prescription?.attributes.prescription}
                  disabled
                ></input>
              </div>
            </div>
            <div className="flex flex-col w-3/4 mt-8">
              <p className="text-base font-semibold">Notes</p>
              <div>
                <textarea
                  className="text-area-normal"
                  rows={4}
                  value={prescription?.attributes.notes}
                  disabled
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="border-primary border p-8 rounded-lg">
            <div className="flex flex-col">
              <p className="text-xl font-black">Patient Information</p>
              <span className="-pt-4 text-base text-body-color">{`ID#: ${prescription?.attributes.patient.data.id}`}</span>
            </div>
            <div className="flex flex-col mt-4">
              <div className="flex flex-col w-1/2">
                <p className="text-base text-body-color ">
                  {`Name: ${prescription?.attributes.patient.data.attributes.fullName}`}{' '}
                </p>
              </div>
              <div className="flex flex-col w-1/2">
                <p className="text-base text-body-color ">
                  {`Address: ${prescription?.attributes.patient.data.attributes.address}`}
                </p>
              </div>
              <div className="my-3">
                <p className="text-base text-primary">
                  Basic Medical Information
                </p>
              </div>
              <div className="flex flex-col w-1/2">
                <p className="text-base text-body-color ">
                  {`Weight: ${prescription?.attributes.patient.data.attributes.medical_redicord.data.attributes.weight}`}
                </p>
              </div>
              <div className="flex flex-col w-1/2">
                <p className="text-base text-body-color ">
                  {`Height: ${prescription?.attributes.patient.data.attributes.medical_redicord.data.attributes.height}`}
                </p>
              </div>
              <div className="flex flex-col w-1/2">
                <p className="text-base text-body-color ">
                  {`Blood Type: ${prescription?.attributes.patient.data.attributes.medical_redicord.data.attributes.bloodtype}`}
                </p>
              </div>
              <div className="flex flex-col w-1/2">
                <p className="text-base text-body-color ">
                  {`Allergies: ${prescription?.attributes.patient.data.attributes.medical_redicord.data.attributes.allergies}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
