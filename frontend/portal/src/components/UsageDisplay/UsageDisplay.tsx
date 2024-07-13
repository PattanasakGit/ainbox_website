"use client";
import React, { useState } from "react";
import { FaCoins } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { MdGeneratingTokens } from "react-icons/md";
import BuyTokenModal from "@/components/UsageDisplay/BuyTokenModal";

const UsageDisplay: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const amount = "12560";
  const unit = "โทเคน";
  return (
    <div>
      <h2 className="text-[1.5rem] text-[#555] font-semibold text-center mb-16">
        ปริมาณโควต้าที่คุณสามารถใช้งานได้
      </h2>
      <div className="bg-[#e4e4e47e] py-8 flex justify-center items-center gap-4">
        <div className="bg-white rounded-[25px] shadow-md py-4 w-[35%] flex items-center justify-center">
          <div className="flex items-center gap-6">
            {/* <FaCoins className="text-yellow-400 text-[4rem] mr-4" /> */}
            <MdGeneratingTokens className="text-yellow-400 text-[4rem] mr-4" />
            <div>
              <span className="text-[4rem] font-bold text-orange-400">
                {amount}
              </span>
              <span className="text-gray-500 ml-4">{unit}</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="border-2 border-yellow-300 bg-orange-400 text-white p-2 shadow-md rounded-[25px] hover:bg-orange-500 transition-colors hover:scale-110"
        >
          <IoAddCircle className="text-[4rem]" />
        </button>

        <BuyTokenModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default UsageDisplay;
