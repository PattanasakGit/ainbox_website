"use client";
import "@/components/ChannelComponent/ECommerce/Ecommerce.css";
import { IFormAiDetail } from "@/models/IChannel";
import ecommerceService from "@/service/ChannelService/EcommerceService";
import { useDataChannel } from "@/store/dataChannel";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AIbehavior from "../AIbehavior/AIbehavior";

const EditAI: React.FC = () => {
  const { dataChannel } = useDataChannel();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formDataAI, setFormDataAI] = useState<IFormAiDetail>({
    ai_name: "",
    ai_behavior: "",
    ai_age: "",
    ai_gender: "",
  });

  useEffect(() => {
    if (!dataChannel) {
      window.location.href = "/";
    } else {
      setFormDataAI({
        ai_name: dataChannel.details.ai_name,
        ai_behavior: dataChannel.details.ai_behavior,
        ai_age: dataChannel.details.ai_age,
        ai_gender: dataChannel.details.ai_gender,
      });
    }
  }, [dataChannel]);

  if (!dataChannel) {
    return null;
  }

  const handleAiData = (data: IFormAiDetail) => {
    setFormDataAI(data);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEditAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (dataChannel) {
      try {
        await ecommerceService.edit(dataChannel.page_id, formDataAI);
        toast.success("บันทึกการแก้ไขเรียบร้อยแล้ว");
        toggleEdit();
      } catch (error) {
        toast.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      }
    }
  };

  const btnEditDisplay = () => {
    return (
      <div className="flex justify-end space-x-2">
        {isEditing ? (
          <>
            <button
              type="button"
              id='btnCancle'
              onClick={toggleEdit}
              className="mt-4 p-2 px-4 bg-gray-100 text-[#333] rounded-md hover:text-white hover:bg-gray-600 focus:ring-2 focus:ring-white focus:outline-none"
            >
              ยกเลิก
            </button>
            <button
              id="btnSave"
              type="button"
              onClick={handleEditAi}
              className="mt-4 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              บันทึก
            </button>
          </>
        ) : (
          <button
            type="button"
            id="btnEdit"
            onClick={toggleEdit}
            className="mt-4 p-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          >
            แก้ไขข้อมูล
          </button>
        )}
      </div>
    );
  };

  return (
    <section className="w-full min-h-screen bg-[#fff0] p-8 pt-4">
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
      <div className="">
        <h2 className="text-center text-[42px] font-black text-orange-400 mb-10">
          <input
            type="text"
            id="shopName"
            value={dataChannel.details.business_name}
            disabled={true}
            className="bg-transparent text-center"
          />
        </h2>
      </div>

      <AIbehavior
        formAI={formDataAI}
        setFormAI={setFormDataAI}
        handleData={handleAiData}
        btnEditDisplay={btnEditDisplay}
        isEditing={!isEditing}
      />

    </section>
  );
};

export default EditAI;
