import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import { getLastCommitDate } from '@/actions/getLastCommitDate';
import { cn } from '@/lib/utils';
import ModalProvider from '@/providers/ModalProvider';
import SmoothScrollProvider from '@/providers/SmoothScrollProvider';
import { ThemeProvider } from '@/providers/ThemeProvider';

import Footer from '@/app/components/Footer';
import FloatingNav from '@/app/components/navbar/FloatingNav';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Keeshigan's Portfolio",
  description: "Keeshigan Pirabaharan's Professional Portfolio Website",
};

export const viewport: Viewport = {
  themeColor: '#0b0f14',
  colorScheme: 'dark',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const commitDate = await getLastCommitDate();

  return (
    <html
      lang='en'
      className={cn('no-scrollbar', geistSans.variable, geistMono.variable)}
      suppressHydrationWarning
    >
      <body className='relative flex min-h-screen flex-col font-sans'>
        {/* Dark-only design: forcing the theme keeps `dark:` styles on for everyone. */}
        <ThemeProvider
          attribute='class'
          forcedTheme='dark'
          disableTransitionOnChange
        >
          <TooltipProvider>
            <FloatingNav />
            <ModalProvider />
            <SmoothScrollProvider />
            {children}
            <Footer date={commitDate} />
            <Toaster position='bottom-center' />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
