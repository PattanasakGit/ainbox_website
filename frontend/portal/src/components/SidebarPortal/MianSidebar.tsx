"use client"
import React, { useState } from "react";

const MianSidebar: React.FC = () => {
  const [selectMenu, setSelectMenu] = useState('ร้านค้า');
  const btnStyle = 'h-12 hover:bg-orange-500 hover:text-white';
  const activeBtnStyle = 'h-12 bg-orange-400 text-white';

  const handleMenuClick = (menu: string) => {
    setSelectMenu(menu);
  };

  return (
    <section className="mt-[70px] h-screen w-[200px] bg-gray-100 fixed top-0 left-0 flex flex-col justify-start">
      <button
        className={selectMenu === 'ร้านค้า' ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick('ร้านค้า')}
      >
        ร้านค้า
      </button>
      <button
        className={selectMenu === 'การใช้งาน' ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick('การใช้งาน')}
      >
        การใช้งาน
      </button>
      <button
        className={selectMenu === 'ช่วยเหลือ' ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick('ช่วยเหลือ')}
      >
        ช่วยเหลือ
      </button>
    </section>
  );
};

export default MianSidebar;
