import { ainboxData } from "@/store/BaseData";
import React from "react";
import Features from "./Features";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <section className="pt-[75px] w-full p-4 text-center">
      <div className="h-[90vh] w-full flex flex-wrap items-center justify-center bg-white rounded-3xl">
      {/* <div className="h-[90vh] w-full flex flex-wrap items-center justify-center bg-orange-200 rounded-3xl"> */}
      {/* <div className="h-screen w-full flex flex-wrap items-center justify-center bg-orange-200 rounded-3xl"> */}
        <div className="flex flex-wrap items-center justify-center  bg-[#fff0] rounded-3xl text-[30px] text-white relative">
          <img
            src={ainboxData.home.images[0]}
            alt="24/7"
            className="w-[500px]"
          />
          <div>

          <Image 
                  src={ainboxData.img.logo}
                  alt="24/7"
                  width={300}
                  height={100}
                  className="mx-auto my-[-90px]"
                />


            <h1 className="topic text-[45px] my-6 ">{ainboxData.home.topic}</h1>
            <div className="textDetail">{ainboxData.home.detail}</div>
            {/* <button className="font-semibold text-[20px] my-8 py-2 px-4 rounded-2xl text-white bg-gradient-to-b from-[#FB8854] to-[#f95437] hover:scale-[1.1]"> */}
            <button className="text-[20px] my-8 py-2 px-4 rounded-2xl text-white bg-[#FB8854] hover:scale-[1.1]">
                ทดลองใช้งาน ฟรี
            </button>
          </div>
        </div>
      </div>
      <Features />
    </section>
  );
};
export default Home;
