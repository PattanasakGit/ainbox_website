"use client"
import { motion } from "framer-motion";
import Title from "@/components/Title/Title";
import { ainboxData } from "@/store/HomeData";
import Image from "next/image";
import React from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Features: React.FC = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
      <Title text={ainboxData.home.title} />
      <motion.p className="textDetail mb-16" variants={fadeInUp}>
        {ainboxData.home.subtitle}
      </motion.p>
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-[80%] p-0 lg:p-8">
          <div className="flex flex-wrap items-center justify-center px-0 md:px-8 xl:px-16">
            <motion.div className="h-full w-full lg:w-[30%] flex items-start justify-center" variants={fadeInUp}>
              <Image
                src={ainboxData.home.images[1]}
                alt="phone chats"
                width={300}
                height={300}
                className="m-4"
              />
            </motion.div>
            <motion.div className="w-full lg:w-[70%] bg-[#F1F9FF] rounded-3xl p-8" variants={fadeInUp}>
              <div className="mt-0 topic text-[25px] lg:text-[30px] whitespace-pre-wrap break-words md:whitespace-normal md:break-normal my-6">
                {ainboxData.home.details[0]}
              </div>
              <p className="textDetail">{ainboxData.home.details[1]}</p>
            </motion.div>
          </div>

          <div className="flex flex-wrap items-center justify-center px-0 md:px-8 xl:px-16">
            <motion.div className="h-full w-full lg:w-[30%] items-start justify-center flex lg:hidden" variants={fadeInUp}>
              <Image
                src={ainboxData.home.images[2]}
                alt="24/7"
                width={300}
                height={300}
                className="m-4"
              />
            </motion.div>
            <motion.div className="w-full lg:w-[70%] bg-[#fffff1] rounded-3xl p-8" variants={fadeInUp}>
              <div className="mt-0 topic text-[25px] lg:text-[30px] whitespace-pre-wrap break-words md:whitespace-normal md:break-normal my-6">
                {ainboxData.home.details[2]}
              </div>
              <p className="textDetail">{ainboxData.home.details[3]}</p>
            </motion.div>
            <motion.div className="h-full w-full lg:w-[30%] items-start justify-center hidden lg:flex" variants={fadeInUp}>
              <Image
                src={ainboxData.home.images[2]}
                alt="24/7"
                width={300}
                height={300}
                className="m-4"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;
