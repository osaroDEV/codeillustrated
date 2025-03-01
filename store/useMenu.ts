'use client'
import { create } from 'zustand';

interface MenuState {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const useMenuStore = create<MenuState>((set) => ({
  menuOpen: false,
  setMenuOpen: (open) => {
    set(() => {
      if (open) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
      return { menuOpen: open };
    });
  },
}));

export default useMenuStore;
