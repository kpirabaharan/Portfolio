import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { getLastCommitDate } from '@/actions/getLastCommitDate';
import ModalProvider from '@/providers/ModalProvider';
import SmoothScrollProvider from '@/providers/SmoothScrollProvider';
import { cn } from '@/lib/utils';

import FloatingNav from '@/app/components/navbar/FloatingNav';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Keeshigan's Portfolio",
  description: "Keeshigan Pirabaharan's Professional Portfolio Website",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const commitDate = await getLastCommitDate();

  return (
    <html lang='en' className='no-scrollbar'>
      <body
        className={cn(inter.className, 'relative flex min-h-screen flex-col')}
      >
        <FloatingNav />
        <ModalProvider />
        <SmoothScrollProvider />
        {children}
        <Footer date={commitDate} />
      </body>
    </html>
  );
};

export default RootLayout;
