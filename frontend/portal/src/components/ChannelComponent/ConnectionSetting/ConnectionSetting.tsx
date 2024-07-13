"use client";
import React, { useEffect, useState } from "react";
import { useDataChannel, useProductStore } from "@/store/dataChannel";
import ChannelService from "@/service/ChannelService/ChannelService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScollUpToTop } from "@/utils/Scoll";
import { IStore } from "../../../models/IChannel";
import ecommerceService from "../../../service/ChannelService/EcommerceService";
import ModalLineDistination from "@/components/ChannelComponent/ConnectionSetting/ModalLineDistination";

const ConnectionSetting: React.FC = () => {
  ScollUpToTop();
  const [destination, setDestination] = useState<string>("");
  const { products } = useProductStore();
  const { dataChannel } = useDataChannel();
  const [selectedPlatform, setSelectedPlatform] = useState<string>("Line");
  const [lineToken, setLineToken] = useState<string>("");
  const [isOpenModal, setOpenModal] = useState(false);
  const [uniqueURL, setUniqueURL] = useState("");
  // const []

  const platforms = ["Line", "Messenger", "API", "Discord", "Embed"];


  //test broadcast
  useEffect(() => {
    const socket = new WebSocket('wss://ainbox-ke5m6qbmkq-as.a.run.app/ws');
    let isFirstMessage = true;
  
    socket.onmessage = function(event) {
      if (isFirstMessage) {
        const data = event.data;
        setDestination(data);
        console.log('First message from server:', data);
        isFirstMessage = false;
      }
    };
  
    socket.onopen = function(event) {
      console.log('WebSocket connection established');
    };
  
    socket.onerror = function(error) {
      console.error('WebSocket error:', error);
    };
  
    socket.onclose = function(event) {
      console.log('WebSocket connection closed');
    };
  
    return () => {
      socket.close();
    };
  }, []);

  const storeDetail: IStore = {
    page_id: destination,
    details: {
      ai_name: dataChannel!.ai_name,
      ai_behavior: dataChannel!.ai_behavior,
      ai_age: dataChannel!.ai_age,
      business_name: dataChannel!.business_name,
      business_type: dataChannel!.business_type,
      address: dataChannel!.address,
      phone: dataChannel!.phone,
      email: dataChannel!.email,
      website: dataChannel!.website,
      opentime: dataChannel!.opentime,
      description: dataChannel!.description,
      ai_gender: dataChannel!.ai_gender,
      product: products.map((product) => {
        return {
          name: product.name,
          price: product.price,
          description: product.description,
          url_link: product.url_link,
        };
      })
    }
  };

  const handleSubmitStore = async () => {
    if (destination) {
      await ecommerceService.createShop(destination, storeDetail)
    }
  }
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = async (platform: string, data: any) => {
    try {
      // const response = await ChannelService.connectionCheck(platform, { data });
      setUniqueURL(`platform: ${platform} | data: ${data}`);
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
    }
    handleOpenModal();
  };

  // const handleSaveToDB = async (platform: string, data: any) => {
  //   // Logic ของปุ่มนี้คือ เป็นการยิ่ง req ไปยัง backend
  //   // เพื่อตรวจสอบว่ามี distination หรือยัง
  // }

  const line = () => {
    return (
      <>
        <ToastContainer
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner mt-16 mb-32">
          <label className="block mb-3 text-lg font-medium text-gray-700">
           กรุณาป้อน Channel secret 
          </label>
          <div className="flex">
            <input
              type="text"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-green-300"
              value={lineToken}
              onChange={(e) => setLineToken(e.target.value)}
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition"
              onClick={() =>
                handleSubmitStore()
              }
            >
              บันทึก
            </button>
          </div>
          {/* <div className="mt-6 flex justify-center">
            <button
              className="px-10 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              บันทึก
            </button>
          </div> */}
        </div>








        <div className="bg-gray-50 p-6 rounded-lg shadow-inner mt-16 mb-32">
          <label className="block mb-3 text-lg font-medium text-gray-700">
            กรุณาป้อน AccessToken
          </label>
          <div className="flex">
            <input
              type="text"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-green-300"
              value={lineToken}
              onChange={(e) => setLineToken(e.target.value)}
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition"
            >
              รับ webhook
            </button>
          </div>
          
        </div>













        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4 text-[#555]">
            ขั้นตอนการเชื่อมต่อ inbox กับ Line
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
            <li>นี่คือตัวอย่างข้อความ</li>
            <li>นี่คือตัวอย่างข้อความ</li>
            <li>นี่คือตัวอย่างข้อความ</li>
            <li>นี่คือตัวอย่างข้อความ</li>
            <li>นี่คือตัวอย่างข้อความ</li>
          </ol>
        </div>

        <div className="mt-10 aspect-video bg-white rounded-lg flex items-center justify-center">
          <iframe
            width="560"
            height="310"
            src="https://www.youtube.com/embed/2Ul4FzP_0ag?si=tqcEupOa_iWmNpg8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="rounded-xl shadow-xl"
            allowFullScreen
          ></iframe>
        </div>
      </>
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-4 px-24 rounded-lg ">
      <h1 className="text-center text-[42px] font-black text-orange-400 mb-10">
        {dataChannel ? dataChannel.business_name : ""}
      </h1>

      <div className="flex justify-center space-x-4 mb-8 pt-0 ">
        {platforms.map((platform) => (
          <button
            key={platform}
            className={`px-5 py-2.5 rounded-full transition ${
              selectedPlatform === platform
                ? "bg-green-500 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedPlatform(platform)}
          >
            {platform}
          </button>
        ))}
      </div>

      {selectedPlatform === platforms[0] && line()}
      {selectedPlatform === platforms[1] && (
        <div className="flex justify-center items-center h-[20vw] w-full text-[#555]">
          เรากำลังพัฒนาเร่ง เพื่อให้พร้อมใช้งานในเร็ว ๆ นี้
        </div>
      )}
      {selectedPlatform === platforms[2] && (
        <div className="flex justify-center items-center h-[20vw] w-full text-[#555]">
          เรากำลังพัฒนาเร่ง เพื่อให้พร้อมใช้งานในเร็ว ๆ นี้
        </div>
      )}
      {selectedPlatform === platforms[3] && (
        <div className="flex justify-center items-center h-[20vw] w-full text-[#555]">
          เรากำลังพัฒนาเร่ง เพื่อให้พร้อมใช้งานในเร็ว ๆ นี้
        </div>
      )}
      {selectedPlatform === platforms[4] && (
        <div className="flex justify-center items-center h-[20vw] w-full text-[#555]">
          เรากำลังพัฒนาเร่ง เพื่อให้พร้อมใช้งานในเร็ว ๆ นี้
        </div>
      )}
      <ModalLineDistination
        uniqueURL={uniqueURL}
        open={isOpenModal}
        close={handleCloseModal}
      />
    </div>
  );
};

export default ConnectionSetting;
