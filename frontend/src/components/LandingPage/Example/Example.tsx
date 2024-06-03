import React from 'react';
import { IFeaturesData } from '../../../models/IFeaturesData';
import { FeaturesData } from '../../../store/FeaturesData';
import Title from '../Title/Title';
import Card from './Card';

const Example: React.FC = () => {
  return (
    <section className="container mx-auto">
      <Title text={'ตัวอย่างการใช้งาน'} />
      <p className='font-fam-only text-[#555] text-[18px] text-center mb-4 px-12'> Chatbot AI 🤖 ใคร ๆ ก็ทำได้  😀 ต่อไปนี้คือตัวอย่างที่คุณเองก็ทำได้ ง่ายนิดเดียว 🤏🏻 </p>
      <div className='w-full flex justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-[95%] lg:w-[85%]  p-4">
          {FeaturesData.map((data: IFeaturesData) => (
            <Card key={data.title} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Example;
