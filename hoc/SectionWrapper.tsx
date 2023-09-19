import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

const SectionWrapper = (Component: React.FC, id: string, className?: string) =>
  function HOC() {
    return (
      <motion.section
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0,
              delayChildren: 0,
            },
          },
        }}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={cn(
          'mx-auto max-w-7xl w-full sm:px-16 px-6 sm:py-16 py-6',
          className,
        )}
      >
        <div id={id} className='absolute -top-[80px] sm:-top-[84px]' />
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
