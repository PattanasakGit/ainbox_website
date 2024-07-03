"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";

const NavbarPortal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="h-[70px] flex justify-between items-center w-full fixed top-0 z-[1000] bg-[#ffffff] shadow-sm px-2 lg:pl-14">
      <div className="flex">
        <Link href={"//"}>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={100}
            loading="eager"
          />
        </Link>
        <button className="mx-16">Document</button>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div>
          <button onClick={toggleModal} className="mr-4 text-[#333]">
            <IoSettingsSharp
              size={25}
              className={`transform transition-transform duration-300 ease-in-out ${
                isModalOpen ? "rotate-90" : ""
              }`}
            />
          </button>
          {isModalOpen && (
            <div className=" text-[#555] absolute top-[5rem] right-3 bg-orange-50 shadow-xl rounded-lg p-6 border w-[15vw]">
              <p className="mb-2 border-b-2 border-[#9999991c] pb-2 text-center">
                user@example.com
              </p>
              <br />
              <button className="w-full text-left px-3 py-2 hover:bg-orange-400 hover:text-white rounded-lg flex items-center gap-2">
                <CgProfile />
                ตั้งค่าบัญชี
              </button>
              <Link href={"/login"}>
                <button className="w-full text-left px-3 py-2 hover:bg-orange-400 hover:text-white rounded-lg mt-2 flex items-center gap-2">
                <RiLogoutCircleLine />
                  ออกจากระบบ
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarPortal;
