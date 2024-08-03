"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalAddChannel from "./ModalAddChannel";

const AddChannelButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center max-w-[18rem] border-2 border-orange-100 hover:border-orange-400 h-full w-full relative rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105 hover:shadow-lg bg-white"
      >
        <div className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-200 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <FaPlus className="text-white text-3xl" />
            </div>
          </div>
          <p className="text-orange-500 font-bold text-lg">เพิ่มรายการ</p>
        </div>
      </div>
      <ModalAddChannel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default AddChannelButton;
