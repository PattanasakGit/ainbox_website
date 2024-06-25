"use client";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { IProductModalProps } from "@/models/IEcommerceChannel";

const ModalProduct: React.FC<IProductModalProps> = ({
  isOpen,
  onClose,
  handleSubmit,
  handleEditProduct,
  dataCreateProduct,
  setDataCreateProduct,
  isEdit,
  dataEditProduct,
  setDataEditProduct,
}) => {
  if (!isOpen) return null;

  const currentData =
    isEdit && dataEditProduct ? dataEditProduct : dataCreateProduct;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (isEdit && dataEditProduct && setDataEditProduct) {
      setDataEditProduct((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    } else {
      setDataCreateProduct((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEdit && dataEditProduct) {
      handleEditProduct(dataEditProduct.key);
    } else {
      handleSubmit();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-[1000] p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center py-4 px-6 shadow-sm border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">
            {isEdit ? "แก้ไขรายการสินค้า" : "เพิ่มรายการสินค้า"}
          </h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <FaTimes className="text-3xl" />
          </button>
        </div>
        <form onSubmit={onSubmit} className="py-6 px-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="EcommerceLabel">
                ชื่อสินค้า
              </label>
              <input
                type="text"
                id="name"
                value={currentData.name}
                onChange={handleChange}
                className="EcommerceInput"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="EcommerceLabel">
                ราคา (บาท)
              </label>
              <input
                type="text"
                id="price"
                value={currentData.price}
                onChange={handleChange}
                className="EcommerceInput"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="EcommerceLabel">
              คำอธิบาย
            </label>
            <textarea
              id="description"
              value={currentData.description}
              onChange={handleChange}
              rows={8}
              className="EcommerceInput resize-none overflow-y-auto"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="url_link" className="EcommerceLabel">
              ลิงก์ URL
            </label>
            <input
              type="text"
              id="url_link"
              value={currentData.url_link}
              onChange={handleChange}
              className="EcommerceInput"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 ml-2 p-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalProduct;
