import Image from "next/image";
import React from "react";
import { ainboxData } from "../../../store/LandingPage/HomeData";
import Features from "./Features";

const Home: React.FC = () => {
  return (
    <section className="pt-[75px] w-full p-4 text-center bg-white">
      <div className="h-[90vh] w-full flex flex-wrap items-center justify-center rounded-3xl">
        <div className="flex flex-wrap items-center justify-center  bg-[#fff0] rounded-3xl text-[30px] text-white relative">
          <img
            src={ainboxData.home.images[0]}
            alt="main image"
            className="w-[500px] my-8 sm:my-0 "
          />
          <div>
            <Image
              src={ainboxData.img.logo}
              alt="logo"
              width={200}
              height={100}
              className="mx-auto my-[-50px] lg:my-[-80px]"
            />

            <h1 className="topic text-[30px] lg:text-[45px] my-6 ">{ainboxData.home.topic}</h1>
            <div className="textDetail md:whitespace-pre-wrap md:break-words">{ainboxData.home.detail}</div>
            <button className="text-[20px] my-8 py-2 px-4 rounded-2xl text-white bg-[#FB8854] hover:scale-[1.1]">
              ทดลองใช้งาน ฟรี!
            </button>
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};
export default Home;
