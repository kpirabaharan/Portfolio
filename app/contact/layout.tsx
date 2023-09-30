import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ModalProvider from '@/providers/ModalProvider';
import { cn } from '@/lib/utils';

import FloatingNav from '@/app/components/navbar/FloatingNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Keeshigan's Portfolio",
  description: "Keeshigan Pirabaharan's Professional Portfolio Website",
};

const ContactLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className='no-scrollbar'>
      <body className={cn(inter.className, 'flex flex-col min-h-screen')}>
        <FloatingNav />
        <ModalProvider />
        {children}
      </body>
    </html>
  );
};

export default ContactLayout;
