'use client';
import { useEffect, useState } from 'react';
import { findOnePrescription } from '../../../../../api/findOnePrescriptionByPatient';
import { updateOnePrescription } from '../../../../../api/updateOnePrescription';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

interface pageProps {
  params: {
    doctor_id: string;
    prescription_id: string;
  };
}
export default function Page({ params }: pageProps) {
  const [prescriptionT, setPrescriptionT] = useState<any>();
  const [notes, setNotes] = useState<any>();
  const [diagnosis, setDiagnosis] = useState<any>();
  const [appointment, setAppointment] = useState<any>();
  const [prescription, setPrescription] = useState<any>();

  const showToastMessage = () => {
    console.log('show alert');
    toast.success('Prescription saved !', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  useEffect(() => {
    const getPrescription = async () => {
      const response = await findOnePrescription(params.prescription_id);
      setPrescription(response.prescriptions.data[0]);
    };
    getPrescription();
  }, []);

  useEffect(() => {
    if (prescription) {
      setNotes(prescription.attributes.notes);
      setDiagnosis(prescription.attributes.diagnosis);
    }
  }, [prescription]);

  const savePrescription = async (e: any) => {
    e.preventDefault();
    const data = {
      prescription: prescriptionT,
      notes: notes,
      diagnosis: diagnosis,
    };
    const response = await updateOnePrescription(
      data.diagnosis,
      data.prescription,
      prescription.id,
      data.notes
    );
    if (response.errors) {
      alert('error');
    } else showToastMessage();
    console.log(response);
  };
  return (
    <div>
      <div className="px-16 mt-16">
        <div className="border-stroke border-b flex flex-row justify-end">
          <div className="w-3/4">
            <p className="mb-2 text-2xl font-semibold text-black">
              Prescription
            </p>
            <p className="text-body-color mb-6 text-sm font-medium">
              Please fill-in the prescription details. All fields are required.
            </p>
          </div>
          <div className="w-1/4 ">
            <button className="continue-button" onClick={savePrescription}>
              Save
            </button>
            <ToastContainer />
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
                      prescription?.attributes?.patient?.data?.attributes
                        ?.fullName
                    }
                    className="text-field-normal text-body-color"
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
                    value={
                      prescription?.attributes?.appointment?.data?.attributes
                        ?.condition
                    }
                    className="text-field-normal text-body-color"
                    disabled
                  ></input>
                </div>
                <div className="w-1/2 mt-4">
                  <label
                    htmlFor="name"
                    className="text-body-color text-base font-medium mb-2"
                  >
                    Diagnosis
                  </label>
                  <textarea
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
                    className="text-field-normal"
                    rows={5}
                  />
                </div>
                <div className="w-1/2 mt-4">
                  <label
                    htmlFor="name"
                    className="text-body-color text-base font-medium mb-2"
                  >
                    Prescription
                  </label>
                  <textarea
                    value={prescriptionT}
                    onChange={(e) => setPrescriptionT(e.target.value)}
                    className="text-field-normal"
                    rows={5}
                  />
                </div>
                <div className="w-1/2 mt-4">
                  <label
                    htmlFor="name"
                    className="text-body-color text-base font-medium mb-2"
                  >
                    Additional Notes
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="text-field-normal"
                    rows={5}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
