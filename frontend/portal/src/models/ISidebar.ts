export interface IMainSidebar {
    selected: MainSidebarSelection;
    setSelected: (indexInput: MainSidebarSelection) => void;
}

export interface IChannelSidebar {
    selected: ChannelSidebarSelection;
    setSelected: (indexInput: ChannelSidebarSelection) => void;
}

export enum MainSidebarSelection {
    Channel = 'Channel',
    Monitor = 'Monitor',
    Help = 'Help',
}

export enum ChannelSidebarSelection {
    ShopInfo = "ShopInfo",
    AIBehavior = "AIBehavior",
    Products = "Products",
    Connects = "Connects",
    Help = 'Help',
}
  