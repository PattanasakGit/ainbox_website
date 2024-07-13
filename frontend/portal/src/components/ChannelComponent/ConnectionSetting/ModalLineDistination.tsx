"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCopy, FaCheck } from "react-icons/fa";

interface ModalLineDistinationProps {
  uniqueURL: string;
  open: boolean;
  close: () => void;
}

const ModalLineDistination: React.FC<ModalLineDistinationProps> = ({
  uniqueURL,
  open,
  close,
}) => {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uniqueURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-[1100] p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white shadow-2xl rounded-2xl max-h-[90%] w-full max-w-md relative overflow-hidden"
          >
            <button
              onClick={close}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Webhook ของคุณ</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-inner">
                <div className="flex items-center">
                  <div className="flex-1 overflow-x-auto custom-scrollbar pr-2">
                    <div className="text-sm font-mono whitespace-nowrap text-gray-700">
                      {uniqueURL}
                    </div>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className={`ml-3 p-2 rounded-md transition-all duration-300 ${
                      copied ? 'bg-green-500 text-white' : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                    aria-label="Copy to clipboard"
                  >
                    {copied ? <FaCheck className="w-5 h-5" /> : <FaCopy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <AnimatePresence>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-600 text-center font-medium"
                  >
                    คัดลอก URL แล้ว!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalLineDistination;