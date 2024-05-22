import React from 'react';
import { IFeaturesData } from '@/models/IFeaturesData';
import { FaCheck } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";

interface CardProps {
  data: IFeaturesData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { title, features, example } = data;

  return (
      <div className="bg-[#ffffff] p-6 rounded-3xl shadow-2xl shadow-[#bd876555] border-[#df89427b]">
        <div className='flex items-center'>
        <BsStars className='text-[#eed442]' />
        <h2 className="topic text-xl font-bold mb-2 text-center mx-2">{title}</h2>
        <hr className="flex-grow h-[2px] bg-gradient-to-r from-[#ffe079b8] to-[#ffffff] border-none rounded-xl" />
      </div>
      <div className="bg-[#ffffffaf] px-4 py-6 rounded-2xl border-2 border-[#f7c89c43]">
        {/* <hr className="h-[2px] w-[85%] bg-[#b5a39239] border-none rounded-xl mx-auto mb-4" /> */}
        <ul className="list-disc">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <div className="mr-2 flex items-center justify-center"> <IoCheckmarkDoneSharp className='text-[#489727] mt-1'/></div>
              <span className='font-fam-only text-[#555]'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="font-fam-only text-[12px] mt-4 text-[#555] flex items-start"> <IoInformationCircleOutline className='mr-1' size={20} /> {example} </p>
    </div>
  );
};

export default Card;
