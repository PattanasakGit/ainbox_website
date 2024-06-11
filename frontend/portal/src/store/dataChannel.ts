"use client"
import { create } from 'zustand'
import { IStore } from '@/models/IChannel'

interface IdataChannel {
  dataChannel: IStore | null;
  setDataChannel: (value: IStore) => void;
}

const getInitialState = (): IStore | null => {
  if (typeof window !== 'undefined') {
    const storedState = sessionStorage.getItem('dataChannel');
    return storedState ? JSON.parse(storedState) : null;
  }
  return null;
};

export const useDataChannel = create<IdataChannel>((set) => ({
  dataChannel: getInitialState(),
  setDataChannel: (value: IStore) => {
    set({ dataChannel: value });
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('dataChannel', JSON.stringify(value));
    }
  },
}));





// import { create } from 'zustand'
// import { IStore } from '@/models/IChannel'

// interface IdataChannel {
//   dataChannel: IStore | null; 
//   setDataChannel: (value: IStore) => void; 
// }

// export const useDataChannel = create<IdataChannel>(set => ({
//   dataChannel: null,
//   setDataChannel: (value: IStore) => set({ dataChannel: value }), 
// }));