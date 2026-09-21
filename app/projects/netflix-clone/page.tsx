import { PageShell } from '@/components/PageShell';

import ProjectHeader from '../components/ProjectHeader';
import ProjectHero from '../components/ProjectHero';

import { netflixClone } from '@/assets';
import { netflix } from '@/constants';

const NetflixPage = () => {
  return (
    <PageShell className='pb-24'>
      <ProjectHeader
        title={netflix.title}
        date={netflix.date}
        category={netflix.category}
        keyTech={netflix.key_tech}
        links={[{ label: 'View Code', href: netflix.github }]}
      />
      <ProjectHero
        image={netflixClone}
        alt={netflix.title}
        background='#141316'
      />
    </PageShell>
  );
};

export default NetflixPage;
