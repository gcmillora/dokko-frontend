import '../styles/globals.css';

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
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
