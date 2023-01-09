import { Poppins } from '@next/font/google';
import Sidebar from './sidebar';

const customFont = Poppins({ weight: '400', display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <div className="grid grid-cols-4 w-full h-full">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </main>
  );
}
