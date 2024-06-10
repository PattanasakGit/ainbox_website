"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from 'next/link'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      toast.error("รหัสผ่านไม่ตรงกัน");
    } else {
      // Handle successful sign-up
      setPasswordMismatch(false);
      console.log("Form submitted");
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-[url('/images/bg.webp')] bg-cover bg-fixed bg-center">
      <ToastContainer
        position="top-center"
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
      <div className="w-[450px] p-8 bg-white rounded-2xl shadow-2xl text-center ">
        <Image
          src="/images/logo.png"
          alt="Ainbox Logo"
          width={200}
          height={20}
          className="mx-auto mb-14"
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              ชื่อผู้ใช้(Email)
            </label>
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
          <div className="mb-4 text-left">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`w-full px-4 py-2 border ${
                passwordMismatch ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 text-left">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              ยืนยันรหัสผ่าน
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className={`w-full px-4 py-2 border ${
                passwordMismatch ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500`}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 my-4 rounded-md hover:bg-orange-600 transition-colors duration-200"
          >
            สมัครสมาชิก
          </button>
        </form>
        <div>
          คุณมีบัญชีผู้ใช้งานแล้วใช่ไหม
          <Link
            href="/login"
            className="text-orange-500 hover:underline"
          >
            เข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
