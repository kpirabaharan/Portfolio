'use client';

import useNavModal from '@/hooks/useNavModal';

const FloatingNav = () => {
  const { isOpen, onOpen, onClose } = useNavModal();

  const css =
    'before:block before:h-[2px] before:w-2/5 before:m-auto before:bg-slate-900 \
    before:relative before:transition before:duration-300 after:block \
    after:h-[2px] after:w-2/5 after:m-auto after:bg-slate-900 after:relative \
    after:transition after:duration-300 before:top-[5px] after:-top-[5px] \
    content-none';

  return (
    <>
      <div
        onClick={isOpen ? onClose : onOpen}
        className='fixed right-0 m-6 md-height:m-10 w-16 md-height:xl:w-24 h-16 md-height:xl:h-24 bg-white rounded-full 
        flex justify-center items-center z-40 cursor-pointer'
      >
        <div
          className={`w-full ${css} ${
            isOpen &&
            'before:top-px after:-top-px before:-rotate-45 after:rotate-45'
          }`}
        />
      </div>
    </>
  );
};

export default FloatingNav;
