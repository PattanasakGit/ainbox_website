import React from 'react';

interface Props {
  text: string;
}

export default function Title({ text }: Props) {
  return (
    <div id="Title" className="w-full mt-32 mb-16 text-center flex items-center">
      {/* <hr className="h-[8px] w-[70vw] bg-[#fcf8f3] border-none rounded-xl mx-auto" /> */}
      <hr className="flex-grow h-[2px] bg-gradient-to-r from-[#fff] to-[#fb895450] border-none rounded-xl" />
      <h1 className="text-[48px] font-black text-gradient mx-8">{text}</h1>
      <hr className="flex-grow h-[2px] bg-gradient-to-r from-[#FB885450] to-[#fff] border-none rounded-xl" />
      {/* <hr className="h-[8px] w-[70vw] bg-[#fcf8f3] border-none rounded-xl mx-auto" /> */}
    </div>
  );
}
