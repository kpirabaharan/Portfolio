import { motion } from 'framer-motion';

const SectionWrapper = (Component: React.FC, id: string) =>
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
        viewport={{ once: true, amount: 'all' }}
        className='mx-auto max-w-7xl w-full sm:px-16 px-6 sm:py-16 py-6'
      >
        <div id={id} className='absolute -top-[80px] sm:-top-[84px]' />
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
