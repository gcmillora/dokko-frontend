import './globals.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

import { Poppins } from '@next/font/google';

const customFont = Poppins({ weight: '400', display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className={customFont.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
