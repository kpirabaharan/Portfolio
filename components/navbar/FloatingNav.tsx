'use client';

import useNavModal from '@/hooks/useNavModal';

const FloatingNav = () => {
  const { isOpen, onOpen, onClose } = useNavModal();

  const css =
    'before:block before:h-[2px] before:w-2/5 before:m-auto before:bg-black \
    before:relative before:transition before:duration-300 after:block \
    after:h-[2px] after:w-2/5 after:m-auto after:bg-black after:relative \
    after:transition after:duration-300 before:top-[5px] after:-top-[5px] \
    content-none';

  return (
    <>
      <div
        onClick={isOpen ? onClose : onOpen}
        className='fixed right-0 m-10 w-24 h-24 bg-white rounded-full 
        flex justify-center items-center z-30'
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
