"use client"
import React, { useState } from "react";

const ChannelSidebar: React.FC = () => {
  const [selectMenu, setSelectMenu] = useState('ข้อมูลร้านค้า');
  const btnStyle = 'h-12 hover:bg-orange-500 hover:text-white';
  const activeBtnStyle = 'h-12 bg-orange-400 text-white';

  const handleMenuClick = (menu: string) => {
    setSelectMenu(menu);
  };

  return (
    <section className="mt-[70px] h-screen w-[200px] bg-gray-100 fixed top-0 left-0 flex flex-col justify-start">
      <button
        className={selectMenu === 'ข้อมูลร้านค้า' ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick('ข้อมูลร้านค้า')}
      >
        ข้อมูลร้านค้า
      </button>
      <button
        className={selectMenu === 'นิสัยของ AI' ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick('นิสัยของ AI')}
      >
        พฤติกรรม AI
      </button>
      <button
        className={selectMenu === 'สินค้า/บริการ' ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick('สินค้า/บริการ')}
      >
        สินค้า/บริการ
      </button>
      <button
        className={selectMenu === 'ตั้งค่าการเชื่อมต่อ' ? activeBtnStyle : btnStyle}
        onClick={() => handleMenuClick('ตั้งค่าการเชื่อมต่อ')}
      >
        ตั้งค่าการเชื่อมต่อ
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

export default ChannelSidebar;
