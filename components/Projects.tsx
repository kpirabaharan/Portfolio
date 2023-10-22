import ProjectCard from '@/components/ProjectCard';

import { allProjects } from '@/constants';

const Projects = () => {
  return (
    <div className='flex flex-row flex-wrap gap-4'>
      {allProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
