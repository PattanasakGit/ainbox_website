import Title from "@/components/Title/Title";
import { ainboxData } from "@/store/baseData";
import Image from "next/image";
import React from "react";

const Service: React.FC = () => {
  return (     
      <div>
        <Title text={ainboxData.home.title} />
        <p className="textDetail mb-16">{ainboxData.home.subtitle}</p>
        <div className="w-full flex justify-center">
          <div className="w-full lg:w-[80%] p-8">
            <div className=" flex flex-wrap items-center justify-center p-10">
              <div className="h-full w-full lg:w-[30%] flex items-start justify-center">
                <Image
                  src={ainboxData.home.images[1]}
                  alt="24/7"
                  width={300}
                  height={300}
                  className="m-4"
                />
              </div>
              <div className="w-full lg:w-[70%] bg-[#F1F9FF] rounded-3xl p-8">
                <h1 className="topic text-[30px] my-6">
                  {ainboxData.home.details[0]}
                </h1>
                <p className="textDetail ">{ainboxData.home.details[1]}</p>
              </div>
            </div>
            <div className=" flex flex-wrap items-center justify-center p-10">
              <div className="w-full lg:w-[70%] bg-[#fffff1] rounded-3xl p-8">
                <h1 className="topic text-[30px] my-6">
                  {ainboxData.home.details[2]}
                </h1>
                <p className="textDetail ">{ainboxData.home.details[3]}</p>
              </div>
              <div className="h-full w-full lg:w-[30%] flex items-start justify-center">
                <Image
                  src={ainboxData.home.images[2]}
                  alt="24/7"
                  width={300}
                  height={300}
                  className="m-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Service;