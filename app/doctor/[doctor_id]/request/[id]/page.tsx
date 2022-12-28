'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import RequestForm from '../../../../components/request/form';

interface pageProps {
  params: { id: string };
}

const Page: FC<pageProps> = ({ params }) => {
  const obj = {
    id: params.id,
    requestDate: 'December 25, 2024',
    fullName: 'Juan Dela Cruz',
    address: 'Koronadal City',
    lastConsultation: 'December 1, 2024',
    contactNumber: '09123456789',
    condition: 'Cough',
    schedule: 'December 25, 2024 10:00 AM',
    typeVisit: 'Physical',
    purpose: 'Checkup',
  };
  return (
    <div className="px-6 py-6 w-full ">
      <div className="px-6">
        <div className="px-6">
          <RequestForm {...obj} />
        </div>
      </div>
    </div>
  );
};

export default Page;
