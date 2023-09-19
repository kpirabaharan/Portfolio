import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { textVariant } from '@/lib/transitions';

import { about } from '@/constants';

const About = () => {
  return (
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHead}>ABOUT</h2>
      <motion.p
        className='mt-4 text-secondary-2 text-[17px] max-w-3xl leading-[30px]'
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
      >
        {about}
      </motion.p>
      <p className='mt-8 text-secondary-2 text-[17px] max-w-4xl leading-[30px]'>
        I am actively seeking opportunities in software development. Please
        reach out if hiring.
      </p>
    </motion.div>
  );
};

export default SectionWrapper(About, 'about');
