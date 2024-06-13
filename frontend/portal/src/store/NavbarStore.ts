"use client"
import { create } from 'zustand'

interface INavbarMenuState {
    isMenuOpen: boolean;
    toggleMenu: () => void;
  }
  
  export const useNavbarMenuState = create<INavbarMenuState>(set => ({
    isMenuOpen: false,
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  }));
  

export default useNavbarMenuState;