import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { getLastCommitDate } from '@/actions/getLastCommitDate';
import { cn } from '@/lib/utils';
import ModalProvider from '@/providers/ModalProvider';
import SmoothScrollProvider from '@/providers/SmoothScrollProvider';

import Footer from '@/app/components/Footer';
import FloatingNav from '@/app/components/navbar/FloatingNav';

const inter = Inter({ subsets: ['latin'] });

export const revalidate = 3600;

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
