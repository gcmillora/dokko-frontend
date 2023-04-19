import { Poppins } from '@next/font/google';
import Sidebar from './sidebar';
import Sidebar_dup from './sidebar_dup';

const customFont = Poppins({ weight: '400', display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <div className="grid grid-cols-5 w-full h-screen">
        <div className="col-span-1 h-full">
          <Sidebar_dup />
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </main>
  );
}
