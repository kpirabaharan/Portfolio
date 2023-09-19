import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { FloatingNavButton } from '@/components/navbar/FloatingNavButton';
import { Contact } from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Keeshigan's Portfolio",
  description: "Keeshigan Pirabaharan's Professional Portfolio Website",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='fixed z-20 top-6 right-6'>
          <FloatingNavButton />
        </div>
        <div className='fixed z-10 bottom-0 left-0'>
          <Contact />
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
