'use client';

import { StarIcon } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

import { fadeIn } from '@/lib/transitions';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { techStack } from '@/constants';

const Skills = () => {
  return (
    <div className='grid gap-6 lg:grid-cols-2'>
      {techStack.map((stack, index) => (
        <motion.div
          key={stack.title}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeIn('up', '', 0.05 * (index % 2), 0.6)}
        >
          <Card className='h-full transition-colors hover:ring-primary/30'>
            <CardHeader className='gap-3'>
              <CardTitle className='flex items-center gap-3 text-xl font-semibold md:text-2xl'>
                <span className='font-mono text-xs text-primary'>
                  {String(index + 1).padStart(2, '0')}
                </span>
                {stack.title}
              </CardTitle>
              <CardDescription className='leading-relaxed md:text-base'>
                {stack.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className='flex flex-wrap gap-2'>
                {stack.tech.map(skill => (
                  <li
                    key={skill.name}
                    className='flex items-center gap-2 rounded-lg bg-background/60 px-3 py-2 ring-1 ring-border'
                  >
                    <span className='relative size-5'>
                      <Image
                        src={skill.icon}
                        alt=''
                        fill
                        sizes='20px'
                        className='object-contain'
                      />
                    </span>
                    <span className='text-sm'>{skill.name}</span>
                    {skill.expertise && (
                      <StarIcon
                        aria-label='Proficient'
                        className='size-3.5 fill-primary text-primary'
                      />
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
