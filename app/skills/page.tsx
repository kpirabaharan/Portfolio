import { StarIcon } from 'lucide-react';

import { PageHeader } from '@/components/PageHeader';
import { PageShell } from '@/components/PageShell';
import Skills from '@/components/Skills';
import { styles } from '@/lib/styles';

const SkillsPage = () => {
  return (
    <PageShell className={`${styles.container} pt-12 pb-24 md:pt-20`}>
      <PageHeader
        eyebrow='Tech Stack'
        title='Skills'
        description={
          <p className='flex items-center gap-2'>
            <StarIcon className='size-4 fill-primary text-primary' />
            Skills I am proficient in
          </p>
        }
      />
      <div className='mt-12'>
        <Skills />
      </div>
    </PageShell>
  );
};

export default SkillsPage;
