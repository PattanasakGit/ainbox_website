import Image from "next/image";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { useMainSidebar } from "@/store/SidebaeStore";
import { MainSidebarSelection } from "@/models/ISidebar";

const ModalAddChannel: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const { setSelected } = useMainSidebar();

  if (!isOpen) return null;

  const categories = [
    {
      title: "ธุรกิจ",
      icon: "/images/Ecom.svg",
      items: ["E-Commerce", "ระบบจัดการบริหารสินค้า", "ระบบจอง"],
      showComponent: MainSidebarSelection.CreateEcommerce,
    },
    {
      title: "คลังข้อมูล",
      icon: "/images/data.svg",
      items: [
        "ระบบให้ข้อมูล / เทศไซต์ข้อมูล",
        "ให้ข้อมูลสาธารณะบริการดูแลเอกชน",
        "ให้ข้อมูลภายในองค์กร",
        "ให้ข้อมูลสาธารณะ",
      ],
      showComponent: MainSidebarSelection.CreateDataWarehouse,
    },
    {
      title: "บุคคล",
      icon: "/images/person.svg",
      items: [
        "สร้าง AI ในมุมมองของคุณเอง",
        "AI แทนตัวคุณเอง",
        "ผู้เชี่ยวชาญ",
        "ผู้ช่วยส่วนตัวอัจฉริยะ",
      ],
      showComponent: MainSidebarSelection.CreatePersonal,
    },
  ];

  return (
    <div className="bg-black bg-opacity-70 backdrop-blur-sm fixed inset-0 flex items-center justify-center z-[1000] p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            คุณต้องการสร้างช่องประเภทใด
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <FaTimes className="text-3xl" />
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border-2 border-orange-300 p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="flex justify-center mb-6">
                  <Image
                    src={category.icon}
                    alt={`${category.title} icon`}
                    height={250}
                    width={250}
                  />
                </div>
                <h3 className="text-center font-bold text-xl mb-4 text-orange-500">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="h-1.5 w-1.5 bg-orange-500 rounded-full mr-2 mt-1.5"></span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-6 w-full py-3 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors"
                onClick={() => setSelected(category.showComponent)}
              >
                เลือก {category.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalAddChannel;
