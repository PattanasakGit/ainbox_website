import React from 'react';
import { IFeaturesData } from '@/models/IFeaturesData';

interface CardProps {
  data: IFeaturesData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { title, features, example } = data;

  return (
    <div className="bg-[#ffffff] p-6 rounded-3xl shadow-2xl shadow-[#bd876555] border-[#df89427b]">
        <h2 className="topic text-xl font-bold mb-2 text-center">{title}</h2>
      <div className="bg-[#ffffffaf] px-4 py-6 rounded-2xl border-2 border-[#f7c89c43]">
        {/* <hr className="h-[2px] w-[85%] bg-[#b5a39239] border-none rounded-xl mx-auto mb-4" /> */}
        <ul className="list-disc">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <span className="mr-2">✅</span>
              <span className='font-fam-only text-[#555]'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="font-fam-only text-[12px] mt-4 text-[#555]">ℹ️ : {example}</p>
    </div>
  );
};

export default Card;
