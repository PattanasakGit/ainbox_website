"use client"
import React from "react";
import { ChannelSidebarSelection } from "@/models/ISidebar";
import { useChannelSidebar } from "@/store/SidebaeStore";
import { IoChevronBack } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link from "next/link";

const ChannelSidebar: React.FC = () => {
  const btnStyle = 'h-12 hover:bg-orange-500 hover:text-white';
  const activeBtnStyle = 'h-12 bg-orange-400 text-white';
  const { selected, setSelected } = useChannelSidebar(); 

  const handleMenuClick = (menu: ChannelSidebarSelection) => {
    setSelected(menu);
  };

  return (
    <section className="mt-[70px] h-screen w-[200px] bg-gray-100 fixed top-0 left-0 flex flex-col justify-start">
      <Link href={'/'}>
        <button
          className={`${btnStyle} flex justify-center items-center gap-2 bg-[#e1e1e1] w-full`}
        >
          <IoArrowBackCircleOutline />
          {`หน้าหลัก`}
        </button>
      </Link>
      <button
        className={selected === ChannelSidebarSelection.ShopInfo ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick(ChannelSidebarSelection.ShopInfo)}
      >
        ข้อมูลร้านค้า
      </button>
      <button
        className={selected === ChannelSidebarSelection.AIBehavior ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick(ChannelSidebarSelection.AIBehavior)}
      >
        พฤติกรรม AI
      </button>
      <button
        className={selected === ChannelSidebarSelection.Products ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick(ChannelSidebarSelection.Products)}
      >
        สินค้า/บริการ
      </button>
      <button
        className={selected === ChannelSidebarSelection.Connects ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick(ChannelSidebarSelection.Connects)}
      >
        ตั้งค่าการเชื่อมต่อ
      </button>
      <button
        className={selected === ChannelSidebarSelection.Help ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick(ChannelSidebarSelection.Help)}
      >
        ช่วยเหลือ
      </button>
    </section>
  );
};

export default ChannelSidebar;
