'use client';

import {
  CopyIcon,
  FileTextIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { toast } from 'sonner';

import { fadeIn } from '@/lib/transitions';
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const EMAIL = 'kpirabaharan3@gmail.com';

interface ContactItem {
  label: string;
  value: string;
  icon: LucideIcon | typeof FaGithub;
  href?: string;
  external?: boolean;
}

const items: ContactItem[] = [
  { label: 'Email', value: EMAIL, icon: MailIcon, href: `mailto:${EMAIL}` },
  {
    label: 'Phone',
    value: '(416)-617-3498',
    icon: PhoneIcon,
    href: 'tel:4166173498',
  },
  {
    label: 'LinkedIn',
    value: 'kpirabaharan',
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/kpirabaharan/',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'kpirabaharan',
    icon: FaGithub,
    href: 'https://github.com/kpirabaharan',
    external: true,
  },
  {
    label: 'Resume',
    value: 'View PDF',
    icon: FileTextIcon,
    href: '/Keeshigan-Pirabaharan-Resume.pdf',
    external: true,
  },
  { label: 'Location', value: 'Toronto, ON', icon: MapPinIcon },
];

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(EMAIL);
    toast.success('Email copied to clipboard');
  } catch {
    toast.error('Couldn’t copy — ' + EMAIL);
  }
};

const ContactCard = ({ className }: { className?: string }) => {
  return (
    <div className={cn('grid grid-cols-1 gap-3 sm:grid-cols-2', className)}>
      {items.map(({ label, value, icon: Icon, href, external }, index) => {
        const body = (
          <>
            <span className='flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20'>
              <Icon className='size-5' />
            </span>
            <span className='flex min-w-0 flex-col'>
              <span className='font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase'>
                {label}
              </span>
              <span className='truncate text-base md:text-lg'>{value}</span>
            </span>
          </>
        );

        return (
          <motion.div
            key={label}
            variants={fadeIn('up', '', 0.05 * index, 0.5)}
            className='group relative flex items-center gap-4 rounded-xl bg-card p-4 ring-1 ring-foreground/10 transition hover:ring-primary/30'
          >
            {href ? (
              <a
                href={href}
                className='flex min-w-0 flex-1 items-center gap-4 after:absolute after:inset-0'
                {...(external && { target: '_blank', rel: 'noreferrer' })}
              >
                {body}
              </a>
            ) : (
              <div className='flex min-w-0 flex-1 items-center gap-4'>
                {body}
              </div>
            )}
            {label === 'Email' && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='relative z-10'
                    onClick={copyEmail}
                  >
                    <CopyIcon />
                    <span className='sr-only'>Copy email</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Copy email</TooltipContent>
              </Tooltip>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ContactCard;
