import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ModalProvider from '@/providers/ModalProvider';

import { getLastCommitDate } from '@/actions/getLastCommitDate';

import FloatingNav from '@/app/components/navbar/FloatingNav';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// export const revalidate = 0;

export const metadata: Metadata = {
  title: "Keeshigan's Portfolio",
  description: "Keeshigan Pirabaharan's Professional Portfolio Website",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const commitDate = await getLastCommitDate();

  return (
    <html lang='en' className='no-scrollbar'>
      <body className={inter.className}>
        <FloatingNav />
        <ModalProvider />
        {children}
        <Footer date={commitDate} />
      </body>
    </html>
  );
};

export default RootLayout;
