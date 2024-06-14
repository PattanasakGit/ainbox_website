"use client"
import React from "react";
import { useMainSidebar } from "@/store/SidebaeStore";
import { MainSidebarSelection } from "@/models/ISidebar";

const MianSidebar: React.FC = () => {
  const btnStyle = 'h-12 hover:bg-orange-500 hover:text-white';
  const activeBtnStyle = 'h-12 bg-orange-400 text-white';
  const { selected, setSelected } = useMainSidebar(); 

  const handleMenuClick = (menu: MainSidebarSelection) => {
    setSelected(menu);
  };

  return (
    <section className="mt-[70px] h-screen w-[200px] bg-gray-100 fixed top-0 left-0 flex flex-col justify-start">
      <button
        className={(selected === MainSidebarSelection.Channel || selected === MainSidebarSelection.CreateDataWarehouse || selected === MainSidebarSelection.CreateEcommerce || selected === MainSidebarSelection.CreatePersonal ) ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick(MainSidebarSelection.Channel)}
      >
        ร้านค้า
      </button>
      <button
        className={selected === MainSidebarSelection.Monitor ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick(MainSidebarSelection.Monitor)}
      >
        การใช้งาน
      </button>
      <button
        className={selected === MainSidebarSelection.Help ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick(MainSidebarSelection.Help)}
      >
        ช่วยเหลือ
      </button>
    </section>
  );
};

export default MianSidebar;
