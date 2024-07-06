"use client";
import React from "react";

interface ModalProps {
  topic: string;
  content: React.ReactNode;
  open: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ topic, content, open, close }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black backdrop-blur-xl  bg-opacity-50 flex justify-center items-center z-[1100]">
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg max-h-[90%] w-[90%] relative overflow-y-auto">
        <button 
          onClick={close}
          className="absolute -top-2  right-4 text-gray-500 hover:text-gray-700 text-[4rem]"
        >
          &times;
        </button>
        {/* <h2 className="text-2xl font-semibold mb-4">{topic}</h2> */}
        <div>
          {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
