import { ainboxData } from "@/store/HomeData";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaFacebook, FaLine } from "react-icons/fa";

interface FooterDataInterface {
  contact: {
    phone: string;
    email: string;
    facebook: string;
    line: string;
  };
}

const FooterData: FooterDataInterface = {
  contact: {
    phone: "0987654321",
    email: "abc@gmail.com",
    facebook: "ainbox",
    line: "ainbox",
  },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#333] mt-20">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center mb-6">
            <Image
              src={ainboxData.img.logo}
              alt="logo"
              width={300}
              height={100}
            />
          </div>
          <div className="">
            <h2 className="font-bold text-white text-center mb-6">ติดต่อ</h2>
            <ul className="flex flex-col sm:flex-row flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
              <li className="flex items-center mb-4 sm:mb-0 sm:me-4 md:me-6">
                <FaPhone className="mr-2" />
                <span>{FooterData.contact.phone}</span>
              </li>
              <li className="flex items-center mb-4 sm:mb-0 sm:me-4 md:me-6">
                <FaEnvelope className="mr-2" />
                <span>{FooterData.contact.email}</span>
              </li>
              <li className="flex items-center mb-4 sm:mb-0 sm:me-4 md:me-6">
                <FaFacebook className="mr-2" />
                <span>{FooterData.contact.facebook}</span>
              </li>
              <li className="flex items-center">
                <FaLine className="mr-2" />
                <span>{FooterData.contact.line}</span>
              </li>
            </ul>
            <div className="flex justify-center mt-8 text-white text-sm hover:text-orange-500">
              <Link href="/policy" className="underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
