"use client";
import React, { useEffect, useState } from "react";
import { IOpenTime } from "@/models/IOpenTime";
import "react-toastify/dist/ReactToastify.css";
import { useDataChannel } from "@/store/dataChannel";
import Opentime from "@/components/OpenTime/Opentime";
import { ToastContainer, toast } from "react-toastify";
import "@/components/ChannelComponent/ECommerce/Ecommerce.css";
import { Address, FormData } from "@/models/IEcommerceChannel";
import ecommerceService from "@/service/ChannelService/EcommerceService";
import { AddressInput } from "@/components/ChannelComponent/ECommerce/AddressInput";

const EditEcommerce: React.FC = () => {
  const { dataChannel } = useDataChannel();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [formData, setFormData] = useState(dataInitial);

  useEffect(() => {
    if (!dataChannel) {
      window.location.href = "/";
    } else {
      setFormData({
        business_name: dataChannel.details.business_name,
        business_type: dataChannel.details.business_type,
        description: dataChannel.details.description,
        address: dataChannel.details.address,
        phone: dataChannel.details.phone,
        email: dataChannel.details.email,
        website: dataChannel.details.website,
        opentime: dataChannel.details.opentime,
      });
    }
  }, [dataChannel]);

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

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { address, ...rest } = formData;
    const addressString = `${address.detailedAddress}, ตำบล ${address.subdistrict}, อำเภอ ${address.district}, จังหวัด ${address.province}, รหัสไปรษณีย์ ${address.zipcode}`;
    const dataToSubmit: FormData = {
      ...rest,
      address: address,
    };

    if (dataChannel) {
      try {
        await ecommerceService.edit(dataChannel.page_id, dataToSubmit);
        toast.success("ข้อมูลถูกบันทึกเรียบร้อยแล้ว");
        toggleEdit();
      } catch (error) {
        toast.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล");
      }
    }
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
            value={formData.business_name}
            disabled={true}
            className="bg-white text-center"
          />
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-[70%] mx-auto bg-[#ffffffff] rounded-xl border-2 border-orange-100 shadow-xl p-8"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="shopName" className="EcommerceLabel">
              ชื่อร้านค้า *
            </label>
            <input
              type="text"
              id="shopName"
              value={formData.business_name}
              onChange={handleChange}
              className="EcommerceInput"
              disabled={!isEditing}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="shopType" className="EcommerceLabel">
              ประเภทของร้านค้า *
            </label>
            <select
              id="shopType"
              value={formData.business_type}
              onChange={handleChange}
              className="EcommerceInput"
              disabled={!isEditing}
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
            disabled={!isEditing}
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
            disabled={!isEditing}
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
              disabled={!isEditing}
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
              disabled={!isEditing}
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <AddressInput
            address={formData.address}
            onChange={handleAddressChange}
            disabled={!isEditing}
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
            isEditing={isEditing}
          />
        </div>

        <div className="flex justify-end space-x-2">
          {isEditing ? (
            <>
              <button
                type="button"
                onClick={toggleEdit}
                className="mt-4 p-2 px-4 bg-gray-100 text-[#333] rounded-md hover:text-white hover:bg-gray-600 focus:ring-2 focus:ring-white focus:outline-none"
              >
                ยกเลิก
              </button>
              <button
                type="submit"
                className="mt-4 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
              >
                บันทึก
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={toggleEdit}
              className="mt-4 p-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              แก้ไขข้อมูล
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default EditEcommerce;

const dataInitial = {
  business_name: "",
  business_type: "",
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
  website: "",
  opentime: {
    Monday: {
      open: false,
      from: "",
      to: "",
    },
    Tuesday: {
      open: false,
      from: "",
      to: "",
    },
    Wednesday: {
      open: false,
      from: "",
      to: "",
    },
    Thursday: {
      open: false,
      from: "",
      to: "",
    },
    Friday: {
      open: false,
      from: "",
      to: "",
    },
    Saturday: {
      open: false,
      from: "",
      to: "",
    },
    Sunday: {
      open: false,
      from: "",
      to: "",
    },
  },
};
