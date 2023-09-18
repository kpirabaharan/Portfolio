import { motion } from 'framer-motion';
import Image from 'next/image';

import { western } from '@/assets';

const Education = () => {
  return (
    <motion.div className='mx-auto max-w-7xl w-full sm:px-16 px-6 sm:py-16 py-6'>
      <motion.h2
        className='text-xl md:text-2xl lg:text-3xl text-teal-600'
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
      >
        EDUCATION
      </motion.h2>
      <div className='mt-4 flex flex-row bg-slate-900 p-8 rounded-2xl justify-center items-center'>
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
    </motion.div>
  );
};

export default Education;
