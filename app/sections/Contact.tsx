import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';

const Contact = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2
        variants={textVariant()}
        className={`${styles.sectionHead} uppercase`}
      >
        Contact
      </motion.h2>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
