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
      <div className="grid grid-cols-4 w-full h-full">
        <div className="col-span-1">
          <Sidebar_dup />
        </div>
        <div className="col-span-3">{children}</div>
      </div>
    </main>
  );
}
