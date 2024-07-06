import "@/components/ChannelComponent/AIbehavior/gender.css";
import { IFormAiDetail } from "@/models/IChannel";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaFemale, FaGenderless, FaMale, FaTransgender } from "react-icons/fa";
import { ScollUpToTop } from "@/utils/Scoll";

interface IAiBehaviorProps {
  next?: () => void;
  prev?: () => void;
  formAI: IFormAiDetail;
  setFormAI: React.Dispatch<React.SetStateAction<IFormAiDetail>>;
  handleData: (data: IFormAiDetail) => void;
  btnEditDisplay?: () => void;
  isEditing?:boolean;
}

const AIbehavior = ({
  formAI,
  setFormAI,
  handleData,
  next,
  prev,
  btnEditDisplay,
  isEditing,
}: IAiBehaviorProps) => {
  ScollUpToTop();
  const [selectedGender, setSelectedGender] = useState<string>();

  const handleGenderSelect = (gender: string) => {
    setFormAI((prev) => ({ ...prev, ai_gender: gender }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormAI((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleData(formAI);

    if (next) {
      next();
    }
  };

  const handleBtnEdit = () => {
    if (btnEditDisplay) {
      return btnEditDisplay();
    }
  };

  useEffect(() => {
    setSelectedGender(formAI.ai_gender);
  }, [formAI.ai_gender]);

  return (
    <section className="w-full min-h-screen bg-[#fff0] p-8 pt-0">
      <form
        onSubmit={handleSubmit}
        className="w-[70%] mx-auto bg-[#ffffffff] rounded-xl border-2 border-orange-100 shadow-xl p-8"
      >
        <div className="mb-4">
          <label htmlFor="ai_name" className="EcommerceLabel">
            ชื่อของผู้ช่วยอัจฉริยะของคุณ (AI)
          </label>
          <input
            type="text"
            id="ai_name"
            value={formAI.ai_name}
            onChange={handleChange}
            className="EcommerceInput"
            required
            disabled={isEditing}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ai_behavior" className="EcommerceLabel">
            พฤติกรรมของผู้ช่วยอัจฉริยะ (AI behavior)
          </label>
          <textarea
            id="ai_behavior"
            value={formAI.ai_behavior}
            onChange={handleChange}
            className="EcommerceInput resize-none"
            rows={3}
            required
            disabled={isEditing}
          />
        </div>

        <div className="mb-4">
          <label className="EcommerceLabel">
            เพศของผู้ช่วยอัจฉริยะ
          </label>
          <div className={`flex space-x-4 my-8 ${isEditing ? 'pointer-events-none opacity-50 cursor-not-allowed' : ''}`}>
            <IconContext.Provider value={{ className: "text-2xl" }}>
              <div
                className="flex flex-col items-center p-2 rounded-xl shadow-lg hover:scale-110 cursor-pointer border"
                onClick={() => handleGenderSelect("LGBTQ+")}
              >
                <button
                  type="button"
                  className={`flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    selectedGender === "LGBTQ+"
                      ? "bg-gradient-to-r from-red-400 via-yellow-400 to-blue-400 animate-gradient-x  text-white"
                      : "text-[#555] bg-gray-100"
                  }`}
                >
                  <FaTransgender className="text-2xl " />
                </button>
                <span className="mt-2 text-[12px] text-gray-700">LGBTQ+</span>
              </div>
              <div
                className="flex flex-col items-center p-2 rounded-xl shadow-lg hover:scale-110 cursor-pointer border"
                onClick={() => handleGenderSelect("ชาย")}
              >
                <button
                  type="button"
                  className={`flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    selectedGender == "ชาย"
                      ? "bg-sky-400 text-white"
                      : "text-[#555] bg-gray-100"
                  }`}
                >
                  <FaMale />
                </button>
                <span className="mt-2 text-[12px] text-gray-700">ชาย</span>
              </div>
              <div
                className="flex flex-col items-center p-2 rounded-xl shadow-lg hover:scale-110 cursor-pointer border"
                onClick={() => handleGenderSelect("หญิง")}
              >
                <button
                  type="button"
                  className={`flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    selectedGender === "หญิง"
                      ? "bg-pink-400 text-white"
                      : "text-[#555] bg-gray-100"
                  }`}
                >
                  <FaFemale />
                </button>
                <span className="mt-2 text-[12px] text-gray-700">หญิง</span>
              </div>
              <div
                className="flex flex-col items-center p-2 rounded-xl shadow-lg hover:scale-110 cursor-pointer border"
                onClick={() => handleGenderSelect("ไม่ระบุ")}
              >
                <button
                  type="button"
                  className={`flex items-center justify-center w-12 h-12 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                    selectedGender === "ไม่ระบุ"
                      ? "bg-orange-400 text-white"
                      : "text-[#555] bg-gray-100"
                  }`}
                >
                  <FaGenderless />
                </button>
                <span className="mt-2 text-[12px] text-gray-700">ไม่ระบุ</span>
              </div>
            </IconContext.Provider>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="ai_age" className="EcommerceLabel">
            อายุของผู้ช่วยอัจฉริยะ(ปี)
          </label>
          <input
            type="text"
            id="ai_age"
            value={formAI.ai_age}
            onChange={handleChange}
            className="EcommerceInput"
            required
            disabled={isEditing}
          />
        </div>

        {next && prev && (
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={prev}
              className="mt-4 p-2 px-4 border text-[#555] rounded-md hover:text-white hover:bg-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              ย้อนกลับ
            </button>
            <button
              type="submit"
              className="mt-4 ml-2 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              ถัดไป
            </button>
          </div>
        )}

        {btnEditDisplay && <>{handleBtnEdit()}</>}
      </form>
    </section>
  );
};

export default AIbehavior;