import { PageShell } from '@/components/PageShell';

import ProjectHeader from '../components/ProjectHeader';
import ProjectHero from '../components/ProjectHero';

import { spotifyClone } from '@/assets';
import { spotify } from '@/constants';

const SpotifyPage = () => {
  return (
    <PageShell className='pb-24'>
      <ProjectHeader
        title={spotify.title}
        date={spotify.date}
        category={spotify.category}
        keyTech={spotify.key_tech}
        links={[{ label: 'Live Site', href: spotify.website }]}
      />
      <ProjectHero image={spotifyClone} alt={spotify.title} background='#000' />
    </PageShell>
  );
};

export default SpotifyPage;
