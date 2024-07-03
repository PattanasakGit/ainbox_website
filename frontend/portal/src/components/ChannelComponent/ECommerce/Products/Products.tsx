"use client";
import ModalProduct from "@/components/ChannelComponent/ECommerce/Products/ModalProduct";
import TableOfProduct from "@/components/ChannelComponent/ECommerce/Products/TableOfProduct";
import ecommerceService from "@/service/ChannelService/EcommerceService";
import { useDataChannel } from "@/store/dataChannel";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IProductInTable } from "@/models/IEcommerceChannel";
import { ScollUpToTop } from "@/utils/Scoll";

const Products: React.FC = () => {
  ScollUpToTop();
  const blankProduct = {
    key: -1,
    name: "",
    price: "",
    description: "",
    url_link: "",
  };
  const [isModal, setIsModal] = useState(false);
  const [dataCreateProduct, setDataCreateProduct] = useState(blankProduct);
  const [isEdit, setIsEdit] = useState(false);
  const [dataEditProduct, setDataEditProduct] =  useState<IProductInTable>(blankProduct);
  const { dataChannel } = useDataChannel();
  if (!dataChannel) {
    window.location.href = "/";
    return null;
  }
  
  const productsWithKeys = dataChannel.details.product.map((item, index) => ({
    ...item,
    key: index,
  }));

  const resetNewdata = () => {
    setDataCreateProduct(blankProduct);
  };

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const closeModal = () => {
    setIsModal(false);
    setDataEditProduct(blankProduct);
    setIsEdit(false);
    resetNewdata();
  };

  const handleCreateProduct = async () => {
    const updatedProducts = [
      ...dataChannel.details.product,
      {
        name: dataCreateProduct.name,
        price: dataCreateProduct.price,
        description: dataCreateProduct.description,
        url_link: dataCreateProduct.url_link,
      },
    ];
    const dataProductToCreate = {
      product: updatedProducts,
    };

    try {
      await ecommerceService.updateProduct(
        dataChannel.page_id,
        dataProductToCreate
      );
      toast.success("ข้อมูลถูกบันทึกเรียบร้อยแล้ว");
      closeModal();
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล\nรหัสความผิดพลาด:FZF0001");
    }
  };
  const handleEditProduct = async (index: number) => {
    try {
      const updatedProducts = dataChannel.details.product.map((product, i) => {
        if (i === index) {
          return {
            name: dataEditProduct.name,
            price: dataEditProduct.price,
            description: dataEditProduct.description,
            url_link: dataEditProduct.url_link,
          };
        }
        return product;
      });
  
      const dataToUpdate = {
        product: updatedProducts,
      };
  
      await ecommerceService.updateProduct(
        dataChannel.page_id,
        dataToUpdate
      );
      toast.success("ข้อมูลถูกอัพเดตเรียบร้อยแล้ว");
      closeModal();
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล\nรหัสความผิดพลาด:FZF0001");
    }
  };

  const handleDeleteProduct = async (index: number) => {
    try {
      const updatedProducts = dataChannel.details.product.filter((_, i) => i !== index);
  
      const dataToUpdate = {
        product: updatedProducts,
      };
  
      await ecommerceService.updateProduct(
        dataChannel.page_id,
        dataToUpdate
      );
      toast.success("สินค้าถูกลบเรียบร้อยแล้ว");
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการลบสินค้า\nรหัสความผิดพลาด:FZF0002");
    }
  };

  return (
    <section className="flex flex-col items-center ">
      <h1 className="text-center text-[42px] font-black text-orange-400 mb-10 pt-4">
        {dataChannel ? dataChannel.details.business_name : ""}
      </h1>
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
      <div className="p-2 text-xl text-[#555] font-semibold bg-gradient-to-r from-orange-50 to-orange-100 shadow-lg outline outline-7 outline-[#00000008] rounded-2xl flex justify-center items-center gap-8">
        <h1 className="ml-2 "> จำนวนสินค้าทั้งหมด </h1>
        {dataChannel.details.product.length}
        <h1> รายการ </h1>
        <button
          onClick={handleModal}
          className="bg-orange-400 text-white font-bold hover:scale-110 shadow-xl py-3 px-6 rounded-xl"
        >
          เพิ่มสินค้า
        </button>
      </div>
      <div className=" w-[90%] bg-[#fbfbfb] outline outline-[#f7f7f7] shadow-xl  p-4 mt-8 rounded-2xl">
        <TableOfProduct
          dataInTable={productsWithKeys}
          setIsEdit={setIsEdit}
          setDataEditProduct={setDataEditProduct}
          handleModal={handleModal}
          handleDeleteProduct={handleDeleteProduct}
        />
      </div>
      <ModalProduct
        isOpen={isModal}
        isEdit={isEdit}
        onClose={closeModal}
        dataCreateProduct={dataCreateProduct}
        setDataCreateProduct={setDataCreateProduct}
        dataEditProduct={dataEditProduct}
        setDataEditProduct={setDataEditProduct}
        handleSubmit={handleCreateProduct}
        handleEditProduct={handleEditProduct}
      />
    </section>
  );
};

export default Products;
