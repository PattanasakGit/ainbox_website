import React from "react";
import { AddressInput } from "@/components/ChannelComponent/ECommerce/AddressInput";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Address, FormData } from "@/models/IEcommerceChannel";
import Link from "next/link";

interface CreateEcommerceProps {
  next: () => void;
  handleData: (data: any) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const CreateEcommerce: React.FC<CreateEcommerceProps> = ({ next, handleData, formData, setFormData }) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddressChange = (newAddress: Address) => {
    setFormData((prev) => ({ ...prev, address: newAddress }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleData(formData);
    next();
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
              ประเภทร้านค้า *
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

        <div className="flex justify-end">
          <button
            type="button"
            onClick={()=>{window.location.reload()}}
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
