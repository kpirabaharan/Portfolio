import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { styles } from '@/lib/styles';

const SectionWrapper = (Component: React.FC, id: string, className?: string) =>
  function HOC() {
    return (
      <motion.section
        id={id}
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
        viewport={{ once: true, amount: 0.15 }}
        className={cn(`${styles.padding} mx-auto max-w-8xl w-full`, className)}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
