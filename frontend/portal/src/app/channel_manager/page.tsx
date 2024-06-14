"use client";
import React, { useState, useEffect } from "react";
import ChannelSidebar from "@/components/SidebarPortal/ChannelSidebar";
import CustomBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
import { useChannelSidebar } from "@/store/SidebaeStore";
import { ChannelSidebarSelection } from "@/models/ISidebar";
import EditEcommerce from "@/components/ChannelComponent/ECommerce/EditEcommerce";
import AinboxLoading from "@/components/Loading/Loading";

const ChannelManager: React.FC = () => {
  const itemsBreadcrumb = [
    {
      title: <span>จัดการช่อง</span>,
    },
  ];

  const { selected } = useChannelSidebar();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 150);
    return () => clearTimeout(timer);
  }, [selected]);

  const ChooseDisplayComponent = () => {
    if (selected === ChannelSidebarSelection.ShopInfo) {
      return (
        <>
          {loading && (
            <AinboxLoading/>
          )}
          <div className={loading ? "hidden" : ""}>
            <EditEcommerce />
          </div>
        </>
      );
    } else if (selected === ChannelSidebarSelection.AIBehavior) {
      return (
        <div className="flex justify-center items-center h-[80vh]">
          หน้านี้คือ ข้อมูล ai
        </div>
      );
    } else if (selected === ChannelSidebarSelection.Products) {
      return (
        <div className="flex justify-center items-center h-[80vh]">
          หน้านี้คือ ข้อมูล สินค้าหรือบริการ
        </div>
      );
    } else if (selected === ChannelSidebarSelection.Connects) {
      return (
        <div className="flex justify-center items-center h-[80vh]">
          หน้านี้คือ ตั้งค้าการเชื่อมต่อ
        </div>
      );
    } else {
      return (
        <div className="flex justify-center items-center h-[80vh]">
          นี่คือพื้นที่ขอความช่วยเหลือซึ่งตอนนี้ยังไม่รู้ว่าจะทำออกมาอย่างไร
        </div>
      );
    }
  };

  return (
    <section className="">
      <CustomBreadcrumb items={itemsBreadcrumb} />
      <ChannelSidebar />
      {ChooseDisplayComponent()}
    </section>
  );
};

export default ChannelManager;
