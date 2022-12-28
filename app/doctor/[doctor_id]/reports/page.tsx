import ReportsTable from '../../../components/doctor_reports/table';

export default function Page() {
  const reports = {
    data: [
      {
        fullName: 'Juan Dela Cruz',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Pending',
        id: '1',
        recordId: '1',
      },
      {
        fullName: 'Jeff Erxon Palen',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Finished',
        id: '2',
        recordId: '2',
      },
      {
        fullName: 'Ron Vertudes',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Finished',
        id: '3',
        recordId: '3',
      },
      {
        fullName: 'Jpol Bods',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Pending',
        id: '4',
        recordId: '4',
      },
      {
        fullName: 'Kit Napolitano',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Pending',
        id: '5',
        recordId: '5',
      },
    ],
  };
  return (
    <div className="w-full">
      <ReportsTable {...reports} />
    </div>
  );
}
