import React from "react";
import { FormData } from "@/models/IEcommerceChannel";
import { IFormAiDetail } from "@/models/IChannel";

interface SummaryProps {
  formData: FormData;
  formAI: IFormAiDetail;
}

const SummaryToSubmit: React.FC<SummaryProps> = ({ formData, formAI }) => {
  return (
    <section className="w-full p-8 pt-4">
      <div className="w-[80%] mx-auto bg-white rounded-xl border-2 border-gray-200 shadow-2xl p-8">
        <h3 className="text-[30px] font-bold text-orange-500 mb-6 border-b-2 border-orange-200 pb-2">ข้อมูลร้านค้า</h3>
        <div className="grid grid-cols-1 gap-4">
          <p className="text-[#555] text-lg"><strong>ชื่อร้านค้า:</strong> {formData.shopName}</p>
          <p className="text-[#555] text-lg"><strong>ประเภทร้านค้า:</strong> {formData.shopType}</p>
          <p className="text-[#555] text-lg "><strong>อธิบายร้านค้าของคุณ:</strong> {formData.description}</p>
          <p className="text-[#555] text-lg"><strong>เบอร์โทรศัพท์:</strong> {formData.phone}</p>
          <p className="text-[#555] text-lg"><strong>อีเมล:</strong> {formData.email}</p>
          <p className="text-[#555] text-lg"><strong>ที่อยู่:</strong> {formData.address.detailedAddress}, {formData.address.subdistrict}, {formData.address.district}, {formData.address.province}, {formData.address.zipcode}</p>
        </div>
        
        <h3 className="text-[30px] font-bold text-orange-500 mb-6 mt-8 border-b-2 border-orange-200 pb-2">ข้อมูล AI</h3>
        <div className="grid grid-cols-1 gap-4">
          <p className="text-[#555] text-lg"><strong>ชื่อของผู้ช่วยอัจฉริยะ:</strong> {formAI.ai_name}</p>
          <p className="text-[#555] text-lg"><strong>พฤติกรรมของผู้ช่วยอัจฉริยะ:</strong> {formAI.ai_behavior}</p>
          <p className="text-[#555] text-lg"><strong>เพศของผู้ช่วยอัจฉริยะ:</strong> {formAI.ai_gender}</p>
          <p className="text-[#555] text-lg"><strong>อายุของผู้ช่วยอัจฉริยะ:</strong> {formAI.ai_age}</p>
        </div>
      </div>
    </section>
  );
};

export default SummaryToSubmit;
