"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoSettingsSharp } from "react-icons/io5";

const NavbarPortal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="h-[70px] flex justify-between items-center w-full fixed top-0 z-[1000] bg-[#ffffff] shadow-sm px-2 lg:pl-16">
      <div className="flex">
        <Link href={'//'}>
          <Image src='/images/logo.png' alt="logo" width={100} height={100} loading="eager" />
        </Link>
        <button className="mx-16">Document</button>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div>
          <button
            onClick={toggleModal}
            className="mr-4 text-[#333] transform hover:rotate-90 transition-all duration-300 ease-in-out"
          >
            <IoSettingsSharp size={25} />
          </button>
          {isModalOpen && (
            <div className="absolute top-16 right-4 bg-white shadow-md rounded-lg p-4">
              <p className="mb-2 border-b-2 border-[#555] pb-2">user@example.com</p>
              <br />
              <button className="block w-full text-left px-2 py-1 hover:bg-orange-200 rounded-lg">
                ตั้งค่าบัญชี
              </button>
              <Link href={'/login'}>
                <button className="block w-full text-left px-2 py-1 hover:bg-orange-200 rounded-lg  mt-2">
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
