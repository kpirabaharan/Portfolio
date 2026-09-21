import { motion } from 'motion/react';

import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';

const SectionWrapper = (Component: React.FC, id: string, className?: string) =>
  function HOC() {
    return (
      <motion.section
        id={id}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.15 }}
        className={cn(
          styles.container,
          styles.sectionPadding,
          'scroll-mt-8',
          className,
        )}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
