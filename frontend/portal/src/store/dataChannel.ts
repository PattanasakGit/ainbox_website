"use client"
import { create } from 'zustand'
import { IBusiness, IProduct } from '@/models/IChannel'

interface IdataChannel {
  dataChannel: IBusiness | null;
  setDataChannel: (value: IBusiness) => void;
}

const getInitialChannelState = (): IBusiness | null => {
  if (typeof window !== 'undefined') {
    const storedState = sessionStorage.getItem('dataChannel');
    return storedState ? JSON.parse(storedState) : null;
  }
  return null;
};

export const useDataChannel = create<IdataChannel>((set) => ({
  dataChannel: getInitialChannelState(),
  setDataChannel: (value: IBusiness) => {
    set({ dataChannel: value });
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('dataChannel', JSON.stringify(value));
    }
  },
}));

interface IProductStore {
  products: IProduct[];
  setProducts: (products: IProduct[]) => void;
}

const getInitialProductState = (): IProduct[] => {
  if (typeof window !== 'undefined') {
    const storedState = sessionStorage.getItem('products');
    return storedState ? JSON.parse(storedState) : [];
  }
  return [];
};

export const useProductStore = create<IProductStore>((set) => ({
  products: getInitialProductState(),
  setProducts: (products: IProduct[]) => {
    set({ products });
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('products', JSON.stringify(products));
    }
  }
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