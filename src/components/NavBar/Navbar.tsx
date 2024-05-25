"use client";
import { ainboxData } from "@/store/HomeData";
import Image from "next/image";
import { Link } from 'react-scroll';
import React from "react";

const CustomNavbar: React.FC = () => {
  const textColorActive = 'text-orange-500'
  const styleBtnNavbar = 'hover:text-orange-600 cursor-pointer'
  return (
    <nav className="h-[70px] flex justify-between items-center w-full px-8 fixed top-0 z-[1000] bg-[#ffffff] shadow-sm">
      <Image src={ainboxData.img.logo} alt="logo" width={180} height={180} />
      <div className="topic text-[20px] flex justify-evenly w-1/2">
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className={styleBtnNavbar}
          activeClass={textColorActive}
        >
          บริการของเรา
        </Link>
        <Link
          to="example"
          spy={true}
          smooth={true}
          duration={500}
          className={styleBtnNavbar}
          activeClass={textColorActive}
        >
          ตัวอย่างการใช้งาน
        </Link>
        <Link
          to="faq"
          spy={true}
          smooth={true}
          duration={500}
          className={styleBtnNavbar}
          activeClass={textColorActive}
        >
          คำถามยอดนิยม
        </Link>
        <Link
          to="price"
          spy={true}
          smooth={true}
          duration={500}
          className={styleBtnNavbar}
          activeClass={textColorActive}
        >
          ราคา
        </Link>
      </div>
      <button
        className="font-semibold text-[19px] py-2 px-4 rounded-xl text-white bg-gradient-to-b from-[#FB8854] to-[#F9373C] hover:scale-[1.1]"
      >
        เข้าสู่ระบบ
      </button>
    </nav>
  );
};

export default CustomNavbar;

