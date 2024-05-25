"use client"
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { IoCheckmarkCircleSharp, IoCloseCircle } from "react-icons/io5";

const PricingCard: React.FC<PricingCardProps> = ({ data }) => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const element = document.getElementById("pricingCard");
      if (element) {
        const elementPosition = element.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition > elementPosition - windowHeight + 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [controls, isVisible]);

  return (
    <motion.div
      id="pricingCard"
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
      transition={{ duration: 0.9 }}
      className="w-full sm:w-64  p-4  bg-[#fffbf5]  shadow-xl rounded-2xl flex flex-col border-2 border-[#fa7d5071]"
    >
      <div className="flex-grow">
        <p className="mb-4 text-xl font-medium text-gray-800">{data.name}</p>
        <p className="text-3xl font-bold text-gray-900">
          ฿ {data.price} <span className="text-sm text-gray-500"> / เดือน </span>
        </p>
        <p className="mt-4 text-xs text-gray-600">{data.text}</p>
        <ul className="w-full mt-6 mb-6 text-sm text-gray-600">
          {data.features.map((feature, index) => (
            <li
              key={index}
              className={`mb-3 flex items-start ${
                !feature.available ? "flex items-center justify-end opacity-50" : ""
              }`}
            >
              <span className="mr-2 mt-[3px] text-lg">
                {feature.available ? (
                  <IoCheckmarkCircleSharp className="text-[#10b981]" />
                ) : (
                  <IoCloseCircle className="text-red-500" />
                )}
              </span>
              {feature.nameFeature}
            </li>
          ))}
        </ul>
      </div>
      {/* <button
        type="button"
        className="py-2 px-4 bg-orange-500 hover:bg-orange-600 focus:ring-orange-400 focus:ring-offset-orange-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
      >
        เลือก
      </button> */}
    </motion.div>
  );
};

export default PricingCard;
