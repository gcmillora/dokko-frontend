import { Poppins } from '@next/font/google';
import Sidebar from './sidebar';

const customFont = Poppins({ weight: '400', display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </main>
  );
}
