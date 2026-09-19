'use client';

import { NavModal } from '@/app/components/navbar/NavModal';
import SplashIn from '@/app/components/SplashIn';

// Both render nothing until opened, so they're safe to server-render.
const ModalProvider = () => (
  <>
    <NavModal />
    <SplashIn />
  </>
);

export default ModalProvider;
