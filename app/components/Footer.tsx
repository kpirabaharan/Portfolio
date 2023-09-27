import { format } from 'date-fns';

interface FooterProps {
  date: Date;
}

const Footer = ({ date }: FooterProps) => {
  return (
    <div className='w-full flex flex-row justify-between'>
      <p>{format(date, 'MMMM do, yyyy')}</p>
    </div>
  );
};

export default Footer;
