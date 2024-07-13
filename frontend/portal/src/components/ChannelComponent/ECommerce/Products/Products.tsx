"use client";
import ModalProduct from "@/components/ChannelComponent/ECommerce/Products/ModalProduct";
import TableOfProduct from "@/components/ChannelComponent/ECommerce/Products/TableOfProduct";
import ecommerceService from "@/service/ChannelService/EcommerceService";
import { useProductStore, useDataChannel } from "@/store/dataChannel";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ScollUpToTop } from "@/utils/Scoll";
import { IProductToHandle } from "@/models/IChannel";

const Products: React.FC = () => {
  ScollUpToTop();
  const { products , setProducts } = useProductStore();
  const { dataChannel } = useDataChannel();
  const blankProduct = {
    business_id: dataChannel?._id,
    name: "",
    price: "",
    description: "",
    url_link: "",
  };
  const [isModal, setIsModal] = useState(false);
  const [dataCreateProduct, setDataCreateProduct] = useState<IProductToHandle>(blankProduct);
  const [isEdit, setIsEdit] = useState(false);
  const [dataEditProduct, setDataEditProduct] =  useState<IProductToHandle>(blankProduct);
  if (!products) {
    window.location.href = "/";
    return null;
  }
  
  const productsWithKeys = products.map((item) => ({
    ...item
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
    try {
      await ecommerceService.createProduct(dataCreateProduct);
      fetchListProduct();
      toast.success("ข้อมูลถูกบันทึกเรียบร้อยแล้ว");
      closeModal();
    } catch (error) {
      toast.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล\nรหัสความผิดพลาด:FZF0001");
    }
  };

  const handleEditProduct = async (updatedProduct: IProductToHandle) => {
    try {
      const productId = products.find(product => product._id === updatedProduct._id)?._id;
      if (!productId) throw new Error("Product ID is undefined");
  
      const filteredUpdatedProduct = Object.fromEntries(
        Object.entries(updatedProduct).filter(([_, v]) => v !== undefined && v !== "")
      );
  
      await ecommerceService.editProduct(productId, filteredUpdatedProduct);
      
      // Update local state
      const updatedProducts = products.map(product => 
        product._id === productId ? { ...product, ...filteredUpdatedProduct } : product
      );
      useProductStore.setState({ products: updatedProducts });
      fetchListProduct();
      toast.success("ข้อมูลถูกอัพเดตเรียบร้อยแล้ว");
      closeModal();
    } catch (error) {
      console.error("Edit product error:", error);
      toast.error("เกิดข้อผิดพลาดในการบันทึกข้อมูล\nรหัสความผิดพลาด:FZF0001");
    }
  };

  const fetchListProduct = async () => {
    const productDataResponse = await ecommerceService.listProduct(
      dataChannel!._id
    );
    setProducts(productDataResponse);
  }

  // const handleDeleteProduct = async (index: number) => {
  //   try {
  //     const updatedProducts = dataChannel.details.product.filter((_, i) => i !== index);
  
  //     const dataToUpdate = {
  //       product: updatedProducts,
  //     };
  
  //     await ecommerceService.updateProduct(
  //       dataChannel.page_id,
  //       dataToUpdate
  //     );
  //     toast.success("สินค้าถูกลบเรียบร้อยแล้ว");
  //   } catch (error) {
  //     toast.error("เกิดข้อผิดพลาดในการลบสินค้า\nรหัสความผิดพลาด:FZF0002");
  //   }
  // };

  return (
    <section className="flex flex-col items-center ">
      <h1 className="text-center text-[42px] font-black text-orange-400 mb-10 pt-4">
        {dataChannel ? dataChannel.business_name : ""}
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
        {products.length}
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
