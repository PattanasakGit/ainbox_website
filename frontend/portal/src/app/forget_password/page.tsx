"use client"
import React, { useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmailSent(true);
      toast.success("อีเมลรีเซ็ตรหัสผ่านถูกส่งเรียบร้อยแล้ว");
      setEmail('');
    } else {
      toast.error("กรุณากรอกอีเมล");
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-[url('/images/bg.webp')] bg-cover bg-fixed bg-center">
      <ToastContainer 
        position="top-center"
        autoClose={3000}
      />
      <div className="w-[450px] p-8 bg-white rounded-2xl shadow-2xl text-center">
        <Image src="/images/logo.png" alt="Ainbox Logo" width={200} height={20} className="mx-auto mb-14" />
        <h2 className="text-[#555] text-2xl font-bold mb-4">ลืมรหัสผ่าน</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 text-left">
            <label htmlFor="email" className="block text-[#555] mb-2">กรอกอีเมลของคุณ</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 my-4 rounded-md hover:bg-orange-600 transition-colors duration-200"
          >
            ส่งอีเมลรีเซ็ตรหัสผ่าน
          </button>
        </form>
        {emailSent && (
          <div className="mt-4 text-green-600">
            หากอีเมลที่ท่านกรอกถูกต้อง เราจะทำการส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปยังอีเมลของท่าน
          </div>
        )}
        <div className="mt-4">
          <a href="/login" className="text-orange-500 hover:underline">
            กลับไปยังหน้าล็อกอิน
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
