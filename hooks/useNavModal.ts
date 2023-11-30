import { create } from 'zustand';

interface NavModalStoreInterface {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNavModal = create<NavModalStoreInterface>(set => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useNavModal;
