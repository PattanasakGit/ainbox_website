"use client"
import React, { useState } from "react";
import { AddressInput } from "@/components/ChannelComponent/ECommerce/AddressInput";
import { Address, FormData } from "@/models/IEcommerceChannel";

const Ecommerce: React.FC = () => {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
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
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white rounded-xl shadow-xl p-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          ลงทะเบียนร้านค้า
        </h2>

        <div className="mb-4">
          <label
            htmlFor="shopName"
            className="block text-sm font-medium text-gray-700"
          >
            ชื่อร้านค้า *
          </label>
          <input
            type="text"
            id="shopName"
            value={formData.shopName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="shopType"
            className="block text-sm font-medium text-gray-700"
          >
            ประเภทของร้านค้า *
          </label>
          <select
            id="shopType"
            value={formData.shopType}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            required
          >
            <option value="">เลือกประเภทร้านค้า</option>
            <option value="food">อาหาร</option>
            <option value="clothing">เสื้อผ้า</option>
            <option value="electronics">อิเล็กทรอนิกส์</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            อธิบายร้านค้าของคุณ *
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <AddressInput
            address={formData.address}
            onChange={handleAddressChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            เบอร์โทรศัพท์
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            pattern="[0-9]{10}"
            title="กรุณากรอกเบอร์โทรศัพท์ 10 หลัก"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            อีเมล
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 p-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          ลงทะเบียน
        </button>
      </form>
    </section>
  );
};

export default Ecommerce;
