import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoSettingsSharp } from "react-icons/io5";

const NavbarPortal: React.FC = () => {
  return (
    <nav className="h-[70px] flex justify-between items-center w-full fixed top-0 z-[1000] bg-[#ffffff] shadow-sm px-2 lg:px-16">
      <div className="flex">
        <Link href={'//'}>
          <Image src='/images/logo.png' alt="logo" width={100} height={100}/>
        </Link>
        <button className="mx-16">
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
