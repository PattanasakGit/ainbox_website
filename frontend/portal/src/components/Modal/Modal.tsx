"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  topic: string;
  content: React.ReactNode;
  open: boolean;
  close: () => void;
  size?: "sm" | "md" | "lg" | "xl";
  theme?: "light" | "dark";
}

const Modal: React.FC<ModalProps> = ({
  topic,
  content,
  open,
  close,
  size = "md",
  theme = "light",
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  const themeClasses = {
    light: "bg-white text-gray-800",
    dark: "bg-gray-800 text-white",
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
            className={`${sizeClasses[size]} w-full ${themeClasses[theme]} shadow-2xl rounded-xl overflow-hidden`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{topic}</h2>
                <button
                  onClick={close}
                  className="text-3xl hover:opacity-70 transition-opacity"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>
              <div className="max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                {content}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;