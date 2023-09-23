import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ModalProvider from '@/providers/ModalProvider';

import FloatingNav from '@/components/navbar/FloatingNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Keeshigan's Portfolio",
  description: "Keeshigan Pirabaharan's Professional Portfolio Website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className='no-scrollbar'>
      <body className={inter.className}>
        <FloatingNav />
        <ModalProvider />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
