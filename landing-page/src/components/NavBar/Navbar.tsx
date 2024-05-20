import { ainboxData } from "@/store/baseData";
import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";

const CustomNavbar: React.FC = () => {
  return (
    <nav className="h-[100px] flex justify-between items-center w-full px-8 fixed top-0 z-[1000] bg-[#fffbf5]">
      <Image src={ainboxData.img.logo} alt="logo" width={200} height={200} />

      <div className="topic text-[25px] flex justify-evenly w-1/2">
        <div> Home </div>
        <div> Features </div>
        <div> Integrations </div>
        <div> Pricing </div>
      </div>

      <button className="font-semibold text-[25px] py-3 px-4 rounded-2xl text-white bg-gradient-to-b from-[#FB8854] to-[#F9373C]
        hover:scale-[1.1]">
        Start Now
      </button>
    </nav>
  );
};


export default CustomNavbar;
