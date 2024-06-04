import React from "react";
import SidebarPortal from "../../components/Portal/SidebarPortal/Sidebar";
import HomePortal from "../../components/Portal/HomePortal/HomePortal";

const channel_manager: React.FC = () => {

  return (
    <section className="flex justify-center items-center">
      <SidebarPortal/>
      <HomePortal/>
      
    </section>
  );
};

export default channel_manager;
