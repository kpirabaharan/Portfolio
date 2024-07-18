import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

import { BackgroundGradient } from '@/components/ui/background-gradient';
import { certificates } from '@/constants';
import SectionWrapper from '@/hoc/SectionWrapper';
import { styles } from '@/lib/styles';
import { fadeIn, textVariant } from '@/lib/transitions';
import Link from 'next/link';

const Certificates = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2 variants={textVariant()} className={styles.sectionHead}>
        CERTIFICATION
      </motion.h2>
      {certificates.map(({ title, date, image, issuer, link }, index) => (
        <BackgroundGradient key={index}>
          <motion.div
            variants={fadeIn('', '', 0.1, 1)}
            className='flex flex-row items-center justify-center rounded-3xl bg-slate-900 p-8'
          >
            <div className='relative h-[100px] w-[100px]'>
              <Image
                className='h-full w-full object-contain'
                src={image}
                fill
                alt={title}
              />
            </div>
            <div className='ml-8 flex w-full flex-col'>
              <p className='text-base font-semibold sm:text-lg md:text-2xl'>
                {title}
              </p>
              <p className='text-sm font-semibold sm:text-base md:text-lg'>
                {issuer}
              </p>
              <p className='text-sm sm:text-base md:text-lg'>{date}</p>
            </div>
            <Link href={link} target='_blank'>
              <FiExternalLink className='h-8 w-8 text-white' />
            </Link>
          </motion.div>
        </BackgroundGradient>
      ))}
    </div>
  );
};

export default SectionWrapper(Certificates, 'certficates');
