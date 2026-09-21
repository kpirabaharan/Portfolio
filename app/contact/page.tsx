import ContactCard from '@/components/ContactCard';
import { PageHeader } from '@/components/PageHeader';
import { PageShell } from '@/components/PageShell';
import { SceneObject } from '@/components/three/SceneObject';
import { styles } from '@/lib/styles';

const ContactPage = () => {
  return (
    <PageShell
      className={`${styles.container} grid items-center gap-8 pt-12 pb-24 md:pt-20 lg:grid-cols-[1fr_minmax(0,420px)]`}
    >
      <div className='flex flex-col gap-12'>
        <PageHeader eyebrow='Contact' title='Get In Touch' />
        <ContactCard className='lg:grid-cols-1' />
      </div>
      <SceneObject
        variant='compact'
        className='order-first aspect-square w-full max-w-[260px] justify-self-center lg:order-last lg:max-w-none'
      />
    </PageShell>
  );
};

export default ContactPage;
