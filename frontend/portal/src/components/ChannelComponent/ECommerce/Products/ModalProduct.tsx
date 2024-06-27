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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[1000] p-4 sm:p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center py-6 px-8 bg-gradient-to-r from-orange-400 to-orange-600">
          <h2 className="text-2xl font-bold text-white">
            {isEdit ? "แก้ไขรายการสินค้า" : "เพิ่มรายการสินค้า"}
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-200 transition-colors"
          >
            <FaTimes className="text-3xl" />
          </button>
        </div>
        <form
          onSubmit={onSubmit}
          className="py-8 px-8 space-y-6 overflow-y-auto max-h-[calc(90vh-130px)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="EcommerceLabel"
              >
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
            <div>
              <label
                htmlFor="price"
                className="EcommerceLabel"
              >
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
          <div>
            <label
              htmlFor="description"
              className="EcommerceLabel"
            >
              คำอธิบาย
            </label>
            <textarea
              id="description"
              value={currentData.description}
              onChange={handleChange}
              rows={6}
              className="EcommerceInput resize-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="url_link"
              className="EcommerceLabel"
            >
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
              className="shadow-xl px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-orange-700 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-300 ease-in-out"
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
