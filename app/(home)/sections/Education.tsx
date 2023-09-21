import Image from 'next/image';
import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';

import { western } from '@/assets';

const Education = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2 variants={textVariant()} className={styles.sectionHead}>
        EDUCATION
      </motion.h2>
      <div
        className='flex flex-row bg-slate-900 p-8 rounded-2xl 
        justify-center items-center'
      >
        <div className='w-[100px] h-[100px] relative'>
          <Image
            className='w-full h-full object-contain'
            src={western.src}
            fill
            alt='Western'
          />
        </div>
        <div className='ml-8 w-full flex flex-col'>
          <div className='flex flex-row '>
            <p className='md:text-2xl sm:text-lg text-[14px] font-semibold'>
              Western University - <span> London, ON</span>
            </p>
          </div>
          <p className='md:text-2xl sm:text-lg text-[14px] font-semibold'>
            B.E.Sc Mechatronics Engineering with distinction
          </p>
          <p className='md:text-2xl sm:text-lg text-[14px] font-semibold'>
            2017 - 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, 'education');
