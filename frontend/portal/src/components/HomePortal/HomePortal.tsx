"use client";
import React from "react";
import NavbarPortal from "../NavbarPortal/NavbarPortal";
import MianSidebar from "../SidebarPortal/MianSidebar";
import CustomBreadcrumb from "../Breadcrumb/Breadcrumb";
import MainChannel from "../ChannelComponent/MainChannel/MainChannel";
import { useMainSidebar } from "../../store/SidebaeStore";
import { MainSidebarSelection } from "../../models/ISidebar";

const HomePortal: React.FC = () => {
    const { selected, setSelected } = useMainSidebar(); 
    const ChooseDisplayComponent = () => {
        if(selected === MainSidebarSelection.Channel){
            return <MainChannel/>;
        }else if (selected === MainSidebarSelection.Monitor){
            return <div className="flex justify-center items-center h-[80vh]">ทดสอบนี่คือ ส่วนของหน้าการใช้งาน ยังไม่ได้ทำ Component</div>
        }else{
            return <div className="flex justify-center items-center h-[80vh]">นี่คือพื้นที่ขอความช่วยเหลือซึ่งตอนนี้ยังไม่รู้ว่าจะทำออกมาอย่างไร</div>
        }
    }

  return (
    <section className="w-full h-screen">
      <NavbarPortal />
      <div className="pt-[70px] pl-[200px]">
        <MianSidebar />
        <CustomBreadcrumb />
        {ChooseDisplayComponent()}
      </div>
    </section>
  );
};

export default HomePortal;
