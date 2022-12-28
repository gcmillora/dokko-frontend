import { Poppins } from '@next/font/google';
import Sidebar from './sidebar';

const customFont = Poppins({ weight: '400', display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full w-screen">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full">{children}</div>
    </main>
  );
}
