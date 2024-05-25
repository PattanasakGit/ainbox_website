import Title from "@/components/Title/Title";
import { ainboxData } from "@/store/HomeData";
import Image from "next/image";
import React from "react";

const Features: React.FC = () => {
  return (     
      <div>
        <Title text={ainboxData.home.title} />
        <p className="textDetail mb-16">{ainboxData.home.subtitle}</p>
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-[80%] p-0 lg:p-8">
            <div className=" flex flex-wrap items-center justify-center px-0 md:px-8 xl:px-16">
              <div className="h-full w-full lg:w-[30%] flex items-start justify-center">
                <Image src={ainboxData.home.images[1]} alt="phone chats" width={300} height={300} className="m-4" />
              </div>
              <div className="w-full lg:w-[70%] bg-[#F1F9FF] rounded-3xl p-8">
                <div className="mt-0 topic text-[25px] lg:text-[30px] whitespace-pre-wrap break-words md:whitespace-normal md:break-normal my-6">
                  {ainboxData.home.details[0]}
                </div>
                <p className="textDetail ">{ainboxData.home.details[1]}</p>
              </div>
            </div>

            <div className=" flex flex-wrap items-center justify-center px-0 md:px-8 xl:px-16">
              <div className="h-full w-full lg:w-[30%] items-start justify-center flex lg:hidden">
                <Image src={ainboxData.home.images[2]} alt="24/7" width={300} height={300} className="m-4" />
              </div>
              <div className="w-full lg:w-[70%] bg-[#fffff1] rounded-3xl p-8">
                <div className="mt-0 topic text-[25px] lg:text-[30px] whitespace-pre-wrap break-words md:whitespace-normal md:break-normal my-6">
                  {ainboxData.home.details[2]}
                </div>
                <p className="textDetail ">{ainboxData.home.details[3]}</p>
              </div>
              <div className="h-full w-full lg:w-[30%] items-start justify-center hidden lg:flex">
                <Image src={ainboxData.home.images[2]} alt="24/7" width={300} height={300} className="m-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Features;