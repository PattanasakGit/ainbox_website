import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdGeneratingTokens } from "react-icons/md";

interface BuyTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BuyTokenModal: React.FC<BuyTokenModalProps> = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState(100);

  if (!isOpen) return null;

  const handleIncrement = () => setAmount(prev => prev + 100);
  const handleDecrement = () => setAmount(prev => Math.max(100, prev - 100));

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[1000] p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">ซื้อ Token เพิ่ม</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <IoClose size={24} />
            </button>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <MdGeneratingTokens className="text-yellow-400 text-6xl mr-4"/>
            <div className="text-5xl font-bold text-orange-400">{amount}</div>
            <span className="text-gray-500 ml-2">โทเคน</span>
          </div>

          <hr className="mb-4"/>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <button 
              onClick={handleDecrement}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              -
            </button>
            <input 
              type="number" 
              value={amount} 
              onChange={(e) => setAmount(Math.max(100, parseInt(e.target.value) || 0))}
              className="w-24 text-center border-2 border-gray-300 rounded-lg py-2"
            />
            <button 
              onClick={handleIncrement}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full"
            >
              +
            </button>
          </div>
          
          <div className="text-center mb-6">
            <p className="text-gray-600">ราคา: {amount * 0.1} บาท</p>
          </div>
          
          <button 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            ยืนยันการซื้อ
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyTokenModal;