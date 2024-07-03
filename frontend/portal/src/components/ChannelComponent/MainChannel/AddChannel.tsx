"use client"
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import ModalAddChannel from "./ModalAddChannel";

const AddChannelButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="min-h-[21rem] h-full w-full flex items-center justify-center bg-white rounded-xl shadow-md border-2 border-orange-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-orange-400 cursor-pointer"
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
