"use client";
import { AddressInput } from "@/components/ChannelComponent/ECommerce/AddressInput";
import Opentime from "@/components/OpenTime/Opentime";
import { Address, FormData } from "@/models/IEcommerceChannel";
import { IOpenTime } from "@/models/IOpenTime";
import React from "react";

interface CreateEcommerceProps {
  next: () => void;
  handleData: (data: FormData) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const CreateEcommerce: React.FC<CreateEcommerceProps> = ({
  next,
  handleData,
  formData,
  setFormData,
}) => {
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

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    handleData(formData);
    next();
  };

  const toggleOpen = (day: keyof IOpenTime) => {
    setFormData((prev) => ({
      ...prev,
      opentime: {
        ...prev.opentime,
        [day]: { ...prev.opentime[day], open: !prev.opentime[day].open },
      },
    }));
  };

  const handleTimeChange = (
    day: keyof IOpenTime,
    type: "from" | "to",
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      opentime: {
        ...prev.opentime,
        [day]: { ...prev.opentime[day], [type]: value },
      },
    }));
  };

  return (
    <section className="w-full min-h-screen bg-[#fff0] p-8 pt-4">
      <form
        onSubmit={handleCreate}
        className="w-[70%] mx-auto bg-[#ffffffff] rounded-xl border-2 border-orange-100 shadow-xl p-8"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="business_name" className="EcommerceLabel">
              ชื่อร้านค้า *
            </label>
            <input
              type="text"
              id="business_name"
              value={formData.business_name}
              onChange={handleChange}
              className="EcommerceInput"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="business_type" className="EcommerceLabel">
              ประเภทร้านค้า *
            </label>
            <select
              id="business_type"
              value={formData.business_type}
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

        <div className="mb-4">
          <label htmlFor="email" className="EcommerceLabel">
            เว็ปไซต์
          </label>
          <input
            type="text"
            id="website"
            value={formData.website}
            onChange={handleChange}
            className="EcommerceInput"
            required
          />
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
              maxLength={10}
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

        <div className="">
          <label htmlFor="opentime" className="EcommerceLabel">
            {" "}
            ช่วงเวลาทำการ{" "}
          </label>
          <Opentime
            hours={formData.opentime}
            toggleOpen={toggleOpen}
            handleTimeChange={handleTimeChange}
            isEditing={true}
          />
        </div>

        <div className="flex justify-end">
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
            type="submit"
            className="mt-4 ml-2 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          >
            ถัดไป
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateEcommerce;
