import '../styles/globals.css';

import { Poppins } from '@next/font/google';

const customFont = Poppins({ weight: '400', display: 'swap' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="h-full bg-gray-50 mt-16">
      <head></head>
      <body className={customFont.className + 'h-full'}>{children}</body>
    </html>
  );
}
