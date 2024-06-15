"use client";
import CustomBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
import MainChannel from "@/components/ChannelComponent/MainChannel/MainChannel";
import NavbarPortal from "@/components/NavbarPortal/NavbarPortal";
import MianSidebar from "@/components/SidebarPortal/MianSidebar";
import { MainSidebarSelection } from "@/models/ISidebar";
import { useMainSidebar } from "@/store/SidebaeStore";
import React from "react";
import FormAddNewChannel from "@/components/ChannelComponent/MainChannel/CreateNewChannel/FormAddNewChannel";

const HomePortal: React.FC = () => {
    const { selected } = useMainSidebar(); 
    const ChooseDisplayComponent = () => {
        if(selected === MainSidebarSelection.Channel){
            return <MainChannel/>;
        }else if (selected === MainSidebarSelection.Monitor){
            return <div className="flex justify-center items-center h-[80vh]">ทดสอบนี่คือ ส่วนของหน้าการใช้งาน ยังไม่ได้ทำ Component</div>
        }else if (selected === MainSidebarSelection.CreateEcommerce){
            return <FormAddNewChannel componentForShow={MainSidebarSelection.CreateEcommerce}/>;
        }else if (selected === MainSidebarSelection.CreateDataWarehouse){
            return <FormAddNewChannel componentForShow={MainSidebarSelection.CreateDataWarehouse}/>;
        }else if (selected === MainSidebarSelection.CreatePersonal){
             return <FormAddNewChannel componentForShow={MainSidebarSelection.CreatePersonal}/>;
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
