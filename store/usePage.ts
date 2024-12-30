'use client'
import { create } from 'zustand';

interface PageState {
    currentPage: string;
    setCurrentPage: (page: string) => void;
  }
  
  const usePageStore = create<PageState>((set) => ({
    currentPage: '',
    setCurrentPage: (page) => set({ currentPage: page }),
  }));

export default usePageStore;