'use client';

const CodeBy = () => {
  return (
    <div className='flex gap-x-1 group'>
      <p className='font-light group-hover:rotate-full transition duration-700'>
        &copy;{' '}
      </p>
      <div className='overflow-hidden text-clip whitespace-nowrap relative'>
        <p className='group-hover:-translate-x-[69px] transition duration-700'>
          &nbsp;Code by Keeshigan Pirabaharan
        </p>
        <div
          className='absolute bg-background w-[200px] h-full top-0 left-[119px]
          group-hover:translate-x-[65px] transition duration-700'
        />
      </div>
    </div>
  );
};

export default CodeBy;
