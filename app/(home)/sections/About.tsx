import { motion } from 'framer-motion';

import SectionWrapper from '@/hoc/SectionWrapper';
import { fadeIn, textVariant } from '@/lib/transitions';
import { styles } from '@/lib/styles';

import { Button } from '@/components/ui/button';
import MagneticButton from '@/hoc/MagneticButton';

const About = () => {
  return (
    <div className='flex flex-col gap-y-8'>
      <motion.h2 variants={textVariant()} className={styles.sectionHead}>
        ABOUT
      </motion.h2>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='max-w-3xl leading-[30px] text-[17px] text-muted-foreground'
      >
        I&apos;m Keeshigan Pirabaharan, a 24-year-old{' '}
        <span className='text-primary font-bold'>
          Mechatronics/Software Engineer
        </span>{' '}
        with a track record of crafting{' '}
        <span className='text-primary font-bold'>innovative</span> solutions
        that seamlessly blend Frontend and Backend technologies. I possess a
        strong aptitude for{' '}
        <span className='text-primary font-bold'>rapid learning</span> and a
        genuine enthusiasm for adopting{' '}
        <span className='text-primary font-bold'>new technologies</span> to
        engineer efficient and{' '}
        <span className='text-primary font-bold'>scalable solutions</span> that
        address real-world challenges.
      </motion.p>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='max-w-4xl leading-[30px] text-[17px] text-primary'
      >
        I am actively seeking opportunities in software development.
      </motion.p>
      <div className='flex flex-row justify-end w-full'>
        <MagneticButton>
          <Button>
            <p className='text-lg'>About Me</p>
          </Button>
        </MagneticButton>
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
