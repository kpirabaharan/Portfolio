import Image from 'next/image';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { fadeIn, textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';

import { western } from '@/assets';

const Education = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2 variants={textVariant()} className={styles.sectionHead}>
        EDUCATION
      </motion.h2>
      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className='flex flex-row items-center justify-center rounded-2xl 
        bg-slate-900 p-8'
      >
        <div className='relative h-[100px] w-[100px]'>
          <Image
            className='h-full w-full object-contain'
            src={western}
            fill
            alt='Western'
          />
        </div>
        <div className='ml-8 flex w-full flex-col'>
          <div className='flex flex-row '>
            <p className='text-[14px] font-semibold sm:text-lg md:text-2xl'>
              Western University - <span> London, ON</span>
            </p>
          </div>
          <p className='text-[14px] font-semibold sm:text-lg md:text-2xl'>
            B.E.Sc Mechatronics Engineering with distinction
          </p>
          <p className='text-[14px] font-semibold sm:text-lg md:text-2xl'>
            2017 - 2022
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Education, 'education');
