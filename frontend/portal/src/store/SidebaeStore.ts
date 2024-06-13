"use client"
import { create } from "zustand";
import { ChannelSidebarSelection, IChannelSidebar, IMainSidebar, MainSidebarSelection } from "@/models/ISidebar";

export const useMainSidebar = create<IMainSidebar>((set) => ({
  selected: MainSidebarSelection.Channel,
  setSelected: (indexInput: MainSidebarSelection) => set({ selected: indexInput }),
}));

export const useChannelSidebar = create<IChannelSidebar>((set) => ({
  selected: ChannelSidebarSelection.ShopInfo,
  setSelected: (indexInput: ChannelSidebarSelection) => set({ selected: indexInput }),
}));
