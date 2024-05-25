"use client";
import { ainboxData } from "@/store/HomeData";
import Image from "next/image";
import { Link } from 'react-scroll';
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


const CustomNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textColorActive = 'text-orange-500';
  const styleBtnNavbar = 'hover:text-orange-600 cursor-pointer';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-[70px] flex justify-between items-center w-full fixed top-0 z-[1000] bg-[#ffffff] shadow-sm px-2 sm:px-8">
      <Image src={ainboxData.img.logo} alt="logo" width={180} height={180} />
      <div className="hidden md:flex topic text-[20px] justify-evenly w-1/2">
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
      <button className="hidden md:block font-semibold text-[19px] py-2 px-4 rounded-xl text-white bg-gradient-to-b from-[#FB8854] to-[#F9373C] hover:scale-[1.1]">
        เข้าสู่ระบบ
      </button>
      <button className="md:hidden text-[24px] cursor-pointer" onClick={toggleMenu}>
        <IoMenuOutline size={40}/>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[2000] backdrop-blur-xl flex justify-center items-center">
          <div className=" p-8 w-full h-1/2 text-center">
            <button className="absolute top-4 right-4 text-2xl" onClick={toggleMenu}>
              <IoClose size={45} color="#333"/>
            </button>
            <nav className="flex flex-col space-y-4 text-[32px] mt-[-50px]">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className={styleBtnNavbar}
                activeClass={textColorActive}
                onClick={toggleMenu}
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
                onClick={toggleMenu}
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
                onClick={toggleMenu}
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
                onClick={toggleMenu}
              >
                ราคา
              </Link>
              <div className="flex item-center justify-center">
                <button className="mt-12 w-[80%] text-[25px] py-2 px-4 rounded-xl text-white bg-gradient-to-b from-[#FB8854] to-[#F9373C] hover:scale-[1.1]" onClick={toggleMenu}>
                  เข้าสู่ระบบ
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
