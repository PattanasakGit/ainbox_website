"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoSettingsSharp } from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { gapi } from 'gapi-script';
import { CgProfile } from "react-icons/cg";
import { RiLogoutCircleLine } from "react-icons/ri";

const NavbarPortal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [isMounted, setIsMounted] = useState(false)
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  const clientId = "1037698577728-825l0c6g03vookbm4gkp03pp45o0c3oc.apps.googleusercontent.com";
  
  useEffect(() => {
    const loginType = localStorage.getItem('loginType');
    const email = localStorage.getItem('userEmail');
    setIsGoogleLogin(loginType === 'google');
    setUserEmail(email || '');
    setIsMounted(true);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLogout = () => {
    if (isGoogleLogin) {
      // Load Google API script dynamically
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/platform.js";
      script.onload = () => {
        gapi.load('auth2', () => {
          gapi.auth2.init({ client_id: clientId }).then(() => {
            const auth2 = gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
              localStorage.removeItem('loginType');
              localStorage.removeItem('userEmail');
              router.push('/login');
            });
          });
        });
      };
      document.body.appendChild(script);
    } else {
      localStorage.removeItem('loginType');
      localStorage.removeItem('userEmail');
      router.push('/login');
    }
  };

  if (!isMounted) {
    return null
  }

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
                {userEmail}
              </p>
              <br />
              <button className="w-full text-left px-3 py-2 hover:bg-orange-400 hover:text-white rounded-lg flex items-center gap-2">
                <CgProfile />
                ตั้งค่าบัญชี
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 hover:bg-orange-400 hover:text-white rounded-lg mt-2 flex items-center gap-2"
              >
                <RiLogoutCircleLine />
                {isGoogleLogin ? 'ออกจากระบบด้วย Google' : 'ออกจากระบบ'}
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarPortal;
