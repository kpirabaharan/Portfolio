import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';

import { aws } from '@/assets';
import { BackgroundGradient } from '@/components/ui/background-gradient';
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
      <BackgroundGradient>
        <motion.div
          variants={fadeIn('', '', 0.1, 1)}
          className='flex flex-row items-center justify-center rounded-3xl bg-slate-900 p-8'
        >
          <div className='relative h-[100px] w-[100px]'>
            <Image
              className='h-full w-full object-contain'
              src={aws}
              fill
              alt='aws'
            />
          </div>
          <div className='ml-8 flex w-full flex-col'>
            <p className='text-base font-semibold sm:text-lg md:text-2xl'>
              AWS Certified Cloud Practitioner
            </p>
            <p className='text-sm font-semibold sm:text-base md:text-lg'>
              Amazon Web Services (AWS)
            </p>
            <p className='text-sm sm:text-base md:text-lg'>
              March 2024 • March 2027
            </p>
          </div>
          <Link
            href={
              'https://cp.certmetrics.com/amazon/en/public/verify/credential/09032e021b234f7a991de2bfb3b63080'
            }
            target='_blank'
          >
            <FiExternalLink className='h-8 w-8 text-white' />
          </Link>
        </motion.div>
      </BackgroundGradient>
    </div>
  );
};

export default SectionWrapper(Certificates, 'certficates');
