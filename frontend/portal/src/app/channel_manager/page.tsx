"use client"
import React from "react";
import ChannelSidebar from "@/components/SidebarPortal/ChannelSidebar";
import CustomBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
const ChannelManager: React.FC = () => {
    const items = [
        {
          href: '/channel_manager',
          title: (<><span>จัดการช่อง</span></>),
        }
      ];
  return (
    <section className="">
        <CustomBreadcrumb items={items} />
      <ChannelSidebar/>
     <div className="h-[800px] w-[800px]">
        this main page
     </div>
    </section>
  );
};
export default ChannelManager;
