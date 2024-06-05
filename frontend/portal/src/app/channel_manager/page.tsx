"use client"
import React from "react";
import ChannelSidebar from "@/components/SidebarPortal/ChannelSidebar";
const ChannelManager: React.FC = () => {
  return (
    <section className="">
      <ChannelSidebar/>
     <div className="h-[800px] w-[800px]">
        this main page
     </div>
    </section>
  );
};
export default ChannelManager;
