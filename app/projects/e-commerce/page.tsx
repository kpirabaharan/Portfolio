import DisplayPicture from '@/components/DisplayPicture';
import { PageShell } from '@/components/PageShell';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';

import ProjectHeader from '../components/ProjectHeader';
import ProjectHero from '../components/ProjectHero';

import { ecommerceAdmin, ecommerceFlutter, ecommerceStore } from '@/assets';
import { eCommerce } from '@/constants';

const features = [
  {
    title: 'Admin Dashboard',
    description:
      'The admin dashboard allows the user to manage multiple online stores from a centralized CMS.',
    image: ecommerceAdmin,
  },
  {
    title: 'Online Store',
    description:
      'A responsive online store that allows users to browse and purchase products with stripe integration.',
    image: ecommerceStore,
  },
  {
    title: 'Mobile Application',
    description:
      'Multi-platform mobile application that allows users to browse and purchase products with stripe integration.',
    image: ecommerceFlutter,
  },
];

const ECommercePage = () => {
  return (
    <PageShell>
      <ProjectHeader
        title={eCommerce.title}
        date={eCommerce.date}
        category={eCommerce.category}
        keyTech={eCommerce.key_tech}
        links={[
          { label: 'Store Code', href: eCommerce.store_github },
          { label: 'Admin Code', href: eCommerce.admin_github },
        ]}
      />
      <ProjectHero
        image={ecommerceStore}
        alt={eCommerce.title}
        background='#fff'
      />
      <div className={cn(styles.container, 'flex flex-col gap-32 py-32')}>
        {features.map(({ title, description, image }) => (
          <section key={title} className='flex flex-col gap-6 text-center'>
            <h2 className='text-3xl font-semibold tracking-tight md:text-5xl'>
              {title}
            </h2>
            <p className='mx-auto max-w-2xl text-lg text-muted-foreground'>
              {description}
            </p>
            <DisplayPicture src={image} alt={title} className='mt-4' />
          </section>
        ))}
      </div>
    </PageShell>
  );
};

export default ECommercePage;
