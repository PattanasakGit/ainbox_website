import { ChannelType, IFormAiDetail } from "@/models/IChannel";
import { FormData } from "@/models/IEcommerceChannel";
import { IOpenTime, OpenHours } from "@/models/IOpenTime";
import Link from "next/link";
import React from "react";
import { ScollUpToTop } from "@/utils/Scoll";

interface SummaryProps {
  formData: FormData;
  formAI: IFormAiDetail;
  channel: ChannelType;
  filedata: string;
  textData: string;
}

const SummaryToSubmit: React.FC<SummaryProps> = ({ formData, formAI, channel, filedata, textData }) => {
  const daysOfWeek: (keyof IOpenTime)[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const thaiDays = ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์', 'อาทิตย์'];

  const renderOpenTimeTable = () => {
    if (!formData.opentime) {
      return <p className="text-[#555] text-lg">ไม่มีข้อมูลเวลาทำการ</p>;
    }

    ScollUpToTop();

    return (
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-orange-100">
              <th className="py-2 px-4 border">วัน</th>
              <th className="py-2 px-4 border">สถานะ</th>
              <th className="py-2 px-4 border">เวลาเปิด</th>
              <th className="py-2 px-4 border">เวลาปิด</th>
            </tr>
          </thead>
          <tbody>
            {daysOfWeek.map((day, index) => {
              const dayData: OpenHours = formData.opentime[day];
              return (
                <tr key={day} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-2 px-4 border">{thaiDays[index]}</td>
                  <td className="py-2 px-4 border">{dayData.open ? 'เปิด' : 'ปิด'}</td>
                  <td className="py-2 px-4 border">{dayData.open ? dayData.from : '-'}</td>
                  <td className="py-2 px-4 border">{dayData.open ? dayData.to : '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  const displayByChannelType = () => {
    if (channel === ChannelType.ECommerce) {
      return (
        <div className="grid grid-cols-1 gap-4">
          <p className="text-[#555] text-lg"><strong>ชื่อร้านค้า:</strong> {formData.business_name}</p>
          <p className="text-[#555] text-lg"><strong>ประเภทร้านค้า:</strong> {formData.business_type}</p>
          <p className="text-[#555] text-lg"><strong>อธิบายร้านค้าของคุณ:</strong> {formData.description}</p>
          <p className="text-[#555] text-lg"><strong>เบอร์โทรศัพท์:</strong> {formData.phone}</p>
          <p className="text-[#555] text-lg"><strong>อีเมล:</strong> {formData.email}</p>
          <p className="text-[#555] text-lg"><strong>ที่อยู่:</strong> {formData.address.detailedAddress}, {formData.address.subdistrict}, {formData.address.district}, {formData.address.province}, {formData.address.zipcode}</p>
          <p className="text-[#555] text-lg"><strong>เวลาทำการ</strong></p>
          {renderOpenTimeTable()}
        </div>
      );
    } else {
      return (
        <div>
          <p className="text-[#555] text-lg"><strong>ข้อมูลที่บันทึกเข้าสู่ระบบ:</strong></p>
          <div className="p-4 w-full h-full border rounded-lg mt-2">
            <pre className="text-[#555] text-lg">{textData}</pre>
            <Link href={filedata} target="_blank">
              <button className={`${filedata ? '':'hidden'} w-full my-6 ml-2 p-2 px-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none`}>
                ลิงค์ที่อยู่ของไฟล์
              </button>
            </Link>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full p-8 pt-4">
      <div className="w-[80%] mx-auto bg-white rounded-xl border-2 border-gray-200 shadow-2xl p-8">
        <h3 className="text-[30px] font-bold text-orange-500 mb-6 border-b-2 border-orange-200 pb-2">ข้อมูลของคุณ</h3>
        {displayByChannelType()}

        <h3 className="text-[30px] font-bold text-orange-500 mb-6 mt-8 border-b-2 border-orange-200 pb-2">ข้อมูล AI</h3>
        <div className="grid grid-cols-1 gap-4">
          <p className="text-[#555] text-lg"><strong>ชื่อของผู้ช่วยอัจฉริยะ:</strong> {formAI.ai_name}</p>
          <p className="text-[#555] text-lg"><strong>พฤติกรรมของผู้ช่วยอัจฉริยะ:</strong> {formAI.ai_behavior}</p>
          <p className="text-[#555] text-lg"><strong>เพศของผู้ช่วยอัจฉริยะ:</strong> {formAI.ai_gender}</p>
          <p className="text-[#555] text-lg"><strong>อายุของผู้ช่วยอัจฉริยะ:</strong> {formAI.ai_age}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryToSubmit;
