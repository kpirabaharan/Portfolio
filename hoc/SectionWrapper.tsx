import { staggerContainer } from '@/lib/transitions';
import { motion } from 'framer-motion';

const SectionWrapper = (Component: React.FC, id: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <div id={id} className='absolute -top-[80px] sm:-top-[84px]' />
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
