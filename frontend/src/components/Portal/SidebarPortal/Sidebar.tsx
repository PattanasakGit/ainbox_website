"use client"
import React, { useEffect, useState } from "react";
const SidebarPortal: React.FC = () => {
  const [selectMenu,setSelectMenu] = useState('ร้านค้า');
  const btnStyle = 'h-12 active:bg-orange-400 active:text-white hover:bg-orange-400 hover:text-white';

  useEffect(()=>{
  },[selectMenu])

  return (
    <section className="mt-[70px] h-screen w-[150px] bg-gray-100 fixed top-0 left-0 flex flex-col justify-start">
      <button className={`${btnStyle}`}> ร้านค้า </button>
      <button className={`${btnStyle}`} > การใช้งาน </button>
      <button className={`${btnStyle}`} > ร้านค้า </button>
    </section>
  );
};
export default SidebarPortal;
