'use client'
import { create } from 'zustand';

interface MenuState {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const useMenuStore = create<MenuState>((set) => ({
  menuOpen: false,
  setMenuOpen: (open) => set({ menuOpen: open }),
}));

export default useMenuStore;
