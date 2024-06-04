"use client";
import Image from "next/image";
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { ainboxData } from "../../../store/LandingPage/HomeData";

const NavbarPortal: React.FC = () => {
  return (
    <nav className="h-[70px] flex justify-between items-center w-full fixed top-0 z-[1000] bg-[#ffffff] shadow-sm px-2 lg:px-8">
      <div className="flex">
        <Image src={ainboxData.img.logo} alt="logo" width={100} height={150} />
        <button className="mx-8">
          Document
        </button>
      </div>
      <div>
        <IoSettingsSharp size={30}/>
      </div>
    </nav>
  );
};
export default NavbarPortal;
