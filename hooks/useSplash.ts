import { create } from 'zustand';

interface SplashStoreInterface {
  isSplash: boolean;
  url?: string;
  startSplash: (prefetchUrl: string) => void;
  closeSplash: () => void;
}

const useSplash = create<SplashStoreInterface>(set => ({
  isSplash: false,
  url: undefined,
  startSplash: (url: string) => set({ isSplash: true, url }),
  closeSplash: () => set({ isSplash: false, url: undefined }),
}));

export default useSplash;
