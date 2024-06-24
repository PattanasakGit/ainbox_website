import React from "react";
import Link from "next/link";
import { FaLine } from "react-icons/fa";
import { CardChannelProps } from "@/models/IChannel";

const CardChannel: React.FC<CardChannelProps> = ({ name, title }) => {
  const generateColor = (char: string) => {
    const colors = ["#FFD54F","#FF9800", "#FFC107", "#F44336", "#FFB300","#FF4081","#E91E63", "#FF5722","#FF6F00","#FF3D00" ];
    const index = char.toUpperCase().charCodeAt(0) % colors.length;
    return colors[index];
  };

  const initial = name.charAt(0);
  const backgroundColor = generateColor(initial);

  return (
    <Link href="/channel_manager">
      <div className="border-2 border-orange-100 hover:border-orange-400 h-full w-full relative rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105 hover:shadow-lg bg-white">
        <div className="h-28 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-inner border-2 border-[#33333344]"
            style={{ backgroundColor }}
          >
            {initial}
          </div>
        </div>
          <div className="p-6 text-center">
            <h3 className="text-lg font-bold mb-2 truncate text-gray-800">{name}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">{title}</p>
            <div className="flex justify-center items-center">
              <div className="w-12 h-12">
                <FaLine className="text-green-500 text-3xl" />
              </div>
            </div>
          </div>
      </div>
    </Link>
  );
};

export default CardChannel;