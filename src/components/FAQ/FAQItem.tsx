"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoAdd, IoRemove } from "react-icons/io5";

const FAQItem: React.FC<IFAQData> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      className="rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <hr className="flex-grow h-[1px] bg-[#ebebeb80] border-none rounded-xl" />
      <motion.div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        initial={false}
      >
        <h3 className="text-lg font-black text-[#555]">{question}</h3>
        <div
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-0" : "rotate-90"
          }`}
        >
          {isOpen ? <IoRemove /> : <IoAdd />}
        </div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="bg-white"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 1, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-[#555] p-4 mr-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default FAQItem;