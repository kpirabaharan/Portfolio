import { PageHeader } from '@/components/PageHeader';
import { PageShell } from '@/components/PageShell';
import { ProjectGrid } from '@/components/ProjectGrid';
import { styles } from '@/lib/styles';

import { allProjects } from '@/constants';

const ProjectsPage = () => {
  return (
    <PageShell className={`${styles.container} pt-12 pb-24 md:pt-20`}>
      <PageHeader
        eyebrow='Projects'
        title='A Showcase of My Projects'
        description='I have completed projects in various fields such as Full Stack, Mobile, Mechatronics, and more.'
      />
      <div className='mt-12'>
        <ProjectGrid projects={allProjects} />
      </div>
    </PageShell>
  );
};

export default ProjectsPage;
