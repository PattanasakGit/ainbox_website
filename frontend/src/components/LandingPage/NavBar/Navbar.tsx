"use client";
import Image from "next/image";
import React from "react";
import { IoClose, IoMenuOutline } from "react-icons/io5";
import { Link as LinkScroll  } from 'react-scroll';
import { ainboxData } from "../../../store/LandingPage/HomeData";
import useNavbarMenuState  from "@/store/LandingPage/NavbarStore"
import Link from "next/link";

const CustomNavbar: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useNavbarMenuState();

  const textColorActive = 'text-orange-500';
  const styleBtnNavbar = 'hover:text-orange-600 cursor-pointer';
  return (
    <nav className="h-[70px] flex justify-between items-center w-full fixed top-0 z-[1000] bg-[#ffffff] shadow-sm px-2 lg:px-8">
      <Image src={ainboxData.img.logo} alt="logo" width={150} height={150} />
      <div className="hidden md:flex topic lg:text-[20px] justify-evenly w-[60%] md:w-1/2">
        <LinkScroll
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className={styleBtnNavbar}
          activeClass={textColorActive}
        >
          บริการของเรา
        </LinkScroll>
        <LinkScroll
          to="example"
          spy={true}
          smooth={true}
          duration={500}
          className={styleBtnNavbar}
          activeClass={textColorActive}
        >
          ตัวอย่างการใช้งาน
        </LinkScroll>
        <LinkScroll
          to="faq"
          spy={true}
          smooth={true}
          duration={500}
          className={styleBtnNavbar}
          activeClass={textColorActive}
        >
          คำถามยอดนิยม
        </LinkScroll>
        <LinkScroll
          to="price"
          spy={true}
          smooth={true}
          duration={500}
          className={styleBtnNavbar}
          activeClass={textColorActive}
        >
          ราคา
        </LinkScroll>
      </div>
      <Link href={'/login'}>
        <button className="hidden md:block font-semibold text-[19px] py-1.5 px-4 rounded-xl text-white bg-orange-600 hover:scale-[1.1]">
          เข้าสู่ระบบ
        </button>
      </Link>
      <button className="md:hidden text-[24px] cursor-pointer" onClick={toggleMenu}>
        <IoMenuOutline size={40} className="text-[#333]"/>
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[2000] backdrop-blur-2xl flex justify-center items-center">
          <div className=" p-8 w-full h-1/2 text-center">
            <button className="absolute top-4 right-4 text-2xl" onClick={toggleMenu}>
              <IoClose size={45} color="#555"/>
            </button>
            <nav className="flex flex-col space-y-4 text-[32px] mt-[-50px]">
              <LinkScroll
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className={styleBtnNavbar}
                activeClass={textColorActive}
                onClick={toggleMenu}
              >
                บริการของเรา
              </LinkScroll>
              <LinkScroll
                to="example"
                spy={true}
                smooth={true}
                duration={500}
                className={styleBtnNavbar}
                activeClass={textColorActive}
                onClick={toggleMenu}
              >
                ตัวอย่างการใช้งาน
              </LinkScroll>
              <LinkScroll
                to="faq"
                spy={true}
                smooth={true}
                duration={500}
                className={styleBtnNavbar}
                activeClass={textColorActive}
                onClick={toggleMenu}
              >
                คำถามยอดนิยม
              </LinkScroll>
              <LinkScroll
                to="price"
                spy={true}
                smooth={true}
                duration={500}
                className={styleBtnNavbar}
                activeClass={textColorActive}
                onClick={toggleMenu}
              >
                ราคา
              </LinkScroll>
              <div className="flex item-center justify-center">
                <Link href={'/login'}>
                  <button className="mt-12 w-[60vw] text-[25px] py-2 px-4 rounded-xl text-white bg-gradient-to-b from-[#FB8854] to-[#F9373C] hover:scale-[1.1]" onClick={toggleMenu}>
                    เข้าสู่ระบบ
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
