import React from 'react';

interface Props {
  text: string;
}

export default function Title({ text }: Props) {
  return (
    <div id="Title" className="w-full mt-32 mb-16 text-center">
      <hr className="h-[8px] w-[70vw] bg-[#fcf8f3] border-none rounded-xl mx-auto" />
      <h1 className="text-[64px] font-black text-gradient">{text}</h1>
      <hr className="h-[8px] w-[70vw] bg-[#fcf8f3] border-none rounded-xl mx-auto" />
    </div>
  );
}
