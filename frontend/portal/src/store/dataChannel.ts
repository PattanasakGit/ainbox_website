import { create } from 'zustand'
import { IStore } from '@/models/IChannel'

interface IdataChannel {
  dataChannel: IStore | null; 
  setDataChannel: (value: IStore) => void; 
}

const getInitialState = (): IStore | null => {
  const storedState = sessionStorage.getItem('dataChannel');
  return storedState ? JSON.parse(storedState) : null;
};

export const useDataChannel = create<IdataChannel>((set) => ({
  dataChannel: getInitialState(),
  setDataChannel: (value: IStore) => {
    set({ dataChannel: value });
    sessionStorage.setItem('dataChannel', JSON.stringify(value));
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