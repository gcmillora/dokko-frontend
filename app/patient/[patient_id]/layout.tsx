import { Poppins } from '@next/font/google';
import Sbardup from './sdup';
import Sidebar from './sidebar';

const customFont = Poppins({ weight: '400', display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={customFont.className}>
      <div className="grid grid-cols-5 w-full h-screen">
        <div className="col-span-1 h-full">
          <Sidebar />
        </div>
        <div className="col-span-4">{children}</div>
      </div>
    </main>
  );
}
