"use client"
import React, { useState } from "react";
import { AddressInput } from "@/components/ChannelComponent/ECommerce/AddressInput";
import { Address, FormData } from "@/models/IEcommerceChannel";
import '@/components/ChannelComponent/ECommerce/Ecommerce.css'
import { useDataChannel } from "@/store/dataChannel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateEcommerce: React.FC = () => {
  const { dataChannel } = useDataChannel();
  const [formData, setFormData] = useState<FormData>({
    shopName: dataChannel?.details.business_name,
    shopType: dataChannel?.details.business_type,
    description: dataChannel?.details.description,
    address: {
      detailedAddress: "",
      subdistrict: "",
      district: "",
      province: "",
      zipcode: "",
    },
    phone: dataChannel?.details.phone,
    email: dataChannel?.details.email,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddressChange = (newAddress: Address) => {
    setFormData((prev) => ({ ...prev, address: newAddress }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { address, ...rest } = formData;
    const addressString = `${address.detailedAddress}, ตำบล ${address.subdistrict}, อำเภอ ${address.district}, จังหวัด ${address.province}, รหัสไปรษณีย์ ${address.zipcode}`;
    const dataToSubmit = { ...rest, address: addressString };

    console.log(dataToSubmit);
    // ส่งข้อมูลไปยังเซิร์ฟเวอร์
  };

  return (
    <section className="w-full min-h-screen bg-[#fff0] p-8 pt-4">

      <div className="">
        <h2 className="text-center text-3xl font-black text-orange-500 mb-16">
            {formData.shopName}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="w-[70%] mx-auto bg-[#ffffffff] rounded-xl border-2 border-orange-100 shadow-xl p-8" >
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="shopName"
              className="EcommerceLabel"
            >
              ชื่อร้านค้า *
            </label>
            <input
              type="text"
              id="shopName"
              value={formData.shopName}
              onChange={handleChange}
              className="EcommerceInput "
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="shopType"
              className="EcommerceLabel"
            >
              ประเภทของร้านค้า *
            </label>
            <select
              id="shopType"
              value={formData.shopType}
              onChange={handleChange}
              className="EcommerceInput"
              required
            >
              <option value="">เลือกประเภทร้านค้า</option>
              <option value="food">อาหาร</option>
              <option value="clothing">เสื้อผ้า</option>
              <option value="electronics">อิเล็กทรอนิกส์</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="EcommerceLabel"
          >
            อธิบายร้านค้าของคุณ *
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className="EcommerceInput  resize-none"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="EcommerceLabel"
            >
              เบอร์โทรศัพท์
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="EcommerceInput "
              pattern="[0-9]{10}"
              title="กรุณากรอกเบอร์โทรศัพท์ 10 หลัก"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="EcommerceLabel"
            >
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="EcommerceInput "
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <AddressInput
            address={formData.address}
            onChange={handleAddressChange} 
            disabled={false}          />
        </div>

        <button
          type="submit"
          className="mt-4 p-2 w-full bg-orange-300 text-white rounded-md hover:bg-orange-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          ลงทะเบียน
        </button>
      </form>
    </section>
  );
};

export default CreateEcommerce;
