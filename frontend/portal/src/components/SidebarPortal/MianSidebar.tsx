"use client";
import React from "react";
import { useMainSidebar } from "@/store/SidebaeStore";
import { MainSidebarSelection } from "@/models/ISidebar";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const MianSidebar: React.FC = () => {
  const btnStyle = "h-12 hover:bg-orange-500 hover:text-white";
  const activeBtnStyle = "h-12 bg-orange-400 text-white";
  const { selected, setSelected } = useMainSidebar();

  const handleMenuClick = (menu: MainSidebarSelection) => {
    setSelected(menu);
  };

  const checkCreateSelect = () => {
    if (selected === MainSidebarSelection.CreateEcommerce) {
      return;
    } else if (selected === MainSidebarSelection.CreateDataWarehouse) {
      return;
    } else if (selected === MainSidebarSelection.CreatePersonal) {
      return;
    } else {
    }
  };

  return (
    <section className="mt-[70px] h-screen w-[200px] bg-[#faf7f3] fixed top-0 left-0 flex flex-col justify-start">
      {(selected === MainSidebarSelection.CreateDataWarehouse ||
        selected === MainSidebarSelection.CreateEcommerce ||
        selected === MainSidebarSelection.CreatePersonal) && (
        <button
          onClick={() => handleMenuClick(MainSidebarSelection.Channel)}
          className={`h-12 hover:text-white flex justify-center items-center gap-2 bg-[#ebe5de] hover:bg-[#bab0a5] w-full`}
        >
          <IoArrowBackCircleOutline />
          {`หน้าหลัก`}
        </button>
      )}
      <button
        className={
          selected === MainSidebarSelection.Channel ? activeBtnStyle : btnStyle
        }
        onClick={() => handleMenuClick(MainSidebarSelection.Channel)}
      >
        ร้านค้า
      </button>
      <button
        className={
          selected === MainSidebarSelection.Monitor ? activeBtnStyle : btnStyle
        }
        onClick={() => handleMenuClick(MainSidebarSelection.Monitor)}
      >
        การใช้งาน
      </button>
      <button
        className={
          selected === MainSidebarSelection.Help ? activeBtnStyle : btnStyle
        }
        onClick={() => handleMenuClick(MainSidebarSelection.Help)}
      >
        ช่วยเหลือ
      </button>
    </section>
  );
};

export default MianSidebar;
