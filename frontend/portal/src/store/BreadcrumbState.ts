"use client"
import { create } from 'zustand'

interface IBreadcrumbState {
  isLoaded: boolean;
  setIsLoaded: (value: boolean) => void;
}

export const useBreadcrumbState = create<IBreadcrumbState>(set => ({
  isLoaded: false,
  setIsLoaded: (value: boolean) => set({ isLoaded: value }),
}));
