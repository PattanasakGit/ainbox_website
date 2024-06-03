"use client"
import { Variants, motion } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from 'react';
import { BsStars } from "react-icons/bs";
import { IoCheckmarkDoneSharp, IoInformationCircleOutline } from "react-icons/io5";
import { IFeaturesData } from '../../../models/IFeaturesData';

const cardVariants: Variants = {
  offscreen: {
    y: 20,
    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.5,
    },
  },
};

interface CardProps {
  data: IFeaturesData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { title, features, example } = data;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current && cardRef.current) {
        observerRef.current.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial="offscreen"
      animate={isVisible ? 'onscreen' : 'offscreen'}
      variants={cardVariants}
      className="bg-[#ffffff] p-6 rounded-3xl shadow-2xl shadow-[#bd876555] cursor-default hover:border-[#f7c89c43]"
    >
      <div className='flex items-center'>
        <BsStars className='text-[#eed442]' />
        <h2 className="topic text-xl font-bold mb-2 text-center mx-2">{title}</h2>
        <hr className="flex-grow h-[2px] bg-gradient-to-r from-[#ffe079b8] to-[#ffffff] border-none rounded-xl" />
      </div>
      <div className="bg-[#ffffffaf] px-4 py-6 rounded-2xl border-2 border-[#f7c89c43]">
        <ul className="list-disc">
          {features.map((feature) => (
            <li key={feature} className="flex items-start">
              <div className="mr-2 flex items-center justify-center">
                <IoCheckmarkDoneSharp className='text-[#489727] mt-1'/>
              </div>
              <span className='font-fam-only text-[#555]'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="font-fam-only text-[12px] mt-4 text-[#555] flex items-start">
        <IoInformationCircleOutline className='mr-1' size={20} />
        {example}
      </p>
    </motion.div>
  );
};

export default Card;
