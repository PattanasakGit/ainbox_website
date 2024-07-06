import React, { useEffect, useState } from "react";
import { ChannelType } from "@/models/IChannel";
import UploadComponent from "@/components/UploadFile/Uploadfile";
import showAlert from "@/components/Alert/Alert";
import { ScollUpToTop } from "@/utils/Scoll";

interface CreateDataWarehouseProps {
  next: () => void;
  filedata: string;
  handleSetFileData: (file: string) => void;
  textData: string;
  handleSetTextData: (text: string) => void;
  setchannel: (channel: ChannelType) => void;
}

const CreateDataWarehouse: React.FC<CreateDataWarehouseProps> = ({
  next,
  filedata,
  handleSetFileData,
  textData,
  handleSetTextData,
  setchannel,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("fillForm");
  setchannel(ChannelType.DataWarehouse);
  useEffect(() => {}, [filedata]);
  ScollUpToTop();

  const handleNext = () => {
    if (filedata || textData) {
      next();
    } else {
      showAlert({
        icon: "error",
        title: `กรุณาเพิ่มข้อมูลของคุณ\nก่อนดำเนินการขั้นตอนต่อไป`,
      });
    }
  };

  return (
    <section className="w-full h-full flex flex-col items-center">
      <div className="w-full flex justify-center items-center my-8">
        <div className="bg-[#faf7f3] p-2 rounded-xl shadow-lg">
          <div className="flex space-x-2">
            <div className="relative">
              <input
                type="radio"
                id="fillForm"
                name="option"
                value="fillForm"
                checked={selectedOption === "fillForm"}
                onChange={() => setSelectedOption("fillForm")}
                className="hidden"
              />
              <label
                htmlFor="fillForm"
                className={`
                  w-[200px] py-3 px-6
                  flex items-center justify-center
                  rounded-lg
                  transition duration-300 ease-in-out
                  ${
                    selectedOption === "fillForm"
                      ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md"
                      : "bg-[#faf7f3] text-gray-700 hover:bg-white"
                  }
                `}
              >
                กรอกข้อมูล
              </label>
            </div>

            <div className="relative">
              <input
                type="radio"
                id="uploadFile"
                name="option"
                value="uploadFile"
                checked={selectedOption === "uploadFile"}
                onChange={() => setSelectedOption("uploadFile")}
                className="hidden"
              />
              <label
                htmlFor="uploadFile"
                className={`
                  w-[200px] py-3 px-6
                  flex items-center justify-center
                  rounded-lg
                  transition duration-300 ease-in-out
                  ${
                    selectedOption === "uploadFile"
                      ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md"
                      : "bg-[#faf7f3] text-gray-700 hover:bg-white"
                  }
                `}
              >
                อัพโหลดไฟล์
              </label>
            </div>
          </div>
        </div>
      </div>

      {selectedOption === "fillForm" && (
        <div className="w-full flex justify-center items-center my-4">
          <textarea
            value={textData}
            onChange={(e) => handleSetTextData(e.target.value)}
            rows={15}
            className="w-3/4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
          />
        </div>
      )}

      {selectedOption === "uploadFile" && (
        <UploadComponent handleSetFileData={handleSetFileData} />
      )}

      <div className="flex justify-end w-[75%] mt-4">
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
          className="mt-4 ml-2 p-2 px-4 border text-[#555] rounded-md hover:bg-orange-200 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
        >
          ยกเลิก
        </button>
        <button
          onClick={handleNext}
          className="mt-4 ml-2 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
        >
          ถัดไป
        </button>
      </div>
    </section>
  );
};

export default CreateDataWarehouse;
