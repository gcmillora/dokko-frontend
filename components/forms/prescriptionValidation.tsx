import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/navigation';
import showToastMessage from '../../utils/error';
import { insertOnePrescription } from '../../query/insertOnePrescription';

interface PrescriptionFormProps {
  nogen_apps: any;
  selectedApp: any;
}

export default function PrescriptionForm({
  nogen_apps,
  selectedApp,
}: PrescriptionFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const jwtToken = localStorage.getItem('jwtToken') || '';

    const appID = nogen_apps.find(
      (app: any) => app.attributes.uid === selectedApp.attributes.uid
    ).id;

    const response = await insertOnePrescription(
      jwtToken,
      selectedApp.attributes.patient.data.id,
      selectedApp.attributes.doctor.data.id,
      data.prescription,
      true,
      appID,
      data.notes,
      data.diagnosis
    );

    showToastMessage('success', 'Report generated successfully.');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Diagnoses</p>
        <textarea
          className="text-field-normal"
          rows={3}
          {...register('diagnosis', { required: true })}
        />
        <p>Prescription</p>
        <textarea
          className="text-field-normal"
          rows={5}
          {...register('prescription', { required: true })}
        />
        <p>Notes</p>
        <textarea
          className="text-field-normal"
          rows={5}
          {...register('notes', { required: true })}
        />
        <button className="continue-button" type="submit">
          Generate Report
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
