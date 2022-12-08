import Calendar from '../../components/doctor_db/recent_appointments/calendar';
import RecentAppointments from '../../components/doctor_db/recent_appointments/table';

export default function Page() {
  const recent_appointments = {
    data: [
      {
        fullName: 'Juan Dela Cruz',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Pending',
        id: '1',
      },
      {
        fullName: 'Jeff Erxon Palen',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Accepted',
        id: '2',
      },
      {
        fullName: 'Ron Vertudes',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Accepted',
        id: '3',
      },
      {
        fullName: 'Jpol Bods',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Pending',
        id: '4',
      },
      {
        fullName: 'Kit Napolitano',
        condition: 'Cough',
        schedule: 'December 25, 2024 10:00 AM',
        status: 'Pending',
        id: '5',
      },
    ],
  };
  return (
    <div className="">
      <RecentAppointments {...recent_appointments} />
    </div>
  );
}
