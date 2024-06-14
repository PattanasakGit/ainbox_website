"use client";
import { AddressInput } from "@/components/ChannelComponent/ECommerce/AddressInput";
import ecommerceService from "@/service/ChannelService/EcommerceService";
import '@/components/ChannelComponent/ECommerce/Ecommerce.css';
import { Address, FormData } from "@/models/IEcommerceChannel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from "react";

const CreateEcommerce: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    shopName: "",
    shopType: "",
    description: "",
    address: {
      detailedAddress: "",
      subdistrict: "",
      district: "",
      province: "",
      zipcode: "",
    },
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddressChange = (newAddress: Address) => {
    setFormData((prev) => ({ ...prev, address: newAddress }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { address, ...rest } = formData;
    const addressString = `${address.detailedAddress}, ตำบล ${address.subdistrict}, อำเภอ ${address.district}, จังหวัด ${address.province}, รหัสไปรษณีย์ ${address.zipcode}`;
    const dataToCreate = { ...rest, address: addressString };

    try {
      await ecommerceService.create(dataToCreate);
      toast.success('ข้อมูลถูกบันทึกเรียบร้อยแล้ว');
      // Optionally, you can reset formData here to clear the form inputs after submission
      setFormData({
        shopName: "",
        shopType: "",
        description: "",
        address: {
          detailedAddress: "",
          subdistrict: "",
          district: "",
          province: "",
          zipcode: "",
        },
        phone: "",
        email: "",
      });
    } catch (error) {
      toast.error('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
    }
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

      <h2 className="text-center text-[42px] font-black text-orange-400 mb-10">สร้างช่องใหม่สำหรับธุรกิจของคุณ</h2>

      <form onSubmit={handleSubmit} className="w-[70%] mx-auto bg-[#ffffffff] rounded-xl border-2 border-orange-100 shadow-xl p-8" >

      <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="shopName" className="EcommerceLabel">
              ชื่อร้านค้า *
            </label>
            <input
              type="text"
              id="shopName"
              value={formData.shopName}
              onChange={handleChange}
              className="EcommerceInput"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="shopType" className="EcommerceLabel">
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
          <label htmlFor="description" className="EcommerceLabel">
            อธิบายร้านค้าของคุณ *
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className="EcommerceInput resize-none"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="phone" className="EcommerceLabel">
              เบอร์โทรศัพท์
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="EcommerceInput"
              pattern="[0-9]{10}"
              title="กรุณากรอกเบอร์โทรศัพท์ 10 หลัก"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="EcommerceLabel">
              อีเมล
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="EcommerceInput"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <AddressInput
            address={formData.address}
            onChange={handleAddressChange}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          >
            บันทึก
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateEcommerce;
