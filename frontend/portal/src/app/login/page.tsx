import Image from "next/image";
import React from "react";
import Link from 'next/link'

const Login: React.FC = () => {

  return (
    <section className="flex justify-center items-center h-screen bg-[url('/images/bg.webp')] bg-cover bg-fixed bg-center">
      <div className="w-[450px] p-8 bg-white rounded-2xl shadow-2xl text-center">
        <Image src="/images/logo.png" alt="Ainbox Logo" width={200} height={20} className="mx-auto mb-14" />
        <form>
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block text-gray-700 mb-2">ชื่อผู้ใช้(Email)</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="password" className="block text-gray-700 mb-2">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 my-4 rounded-md hover:bg-orange-600 transition-colors duration-200"
          >
            เข้าสู่ระบบ
          </button>
          <Link href="//" >
            <button
              className="w-full bg-green-500 text-white py-2 my-4 rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              ปุ่มนี้สมมติว่า Login ได้ DEV MODE
            </button>
          </Link>
        </form>
        <div className="my-4">
          <Link href="/forget_password" className="text-orange-500 hover:underline">
            ลืมรหัสผ่าน
          </Link>
        </div>
        <div>
            คุณยังไม่มีบัญชีผู้ใช้งานใช่ไหม
            <Link href="/signup" className="text-orange-500 hover:underline">
                สมัครสมาชิกใหม่
            </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Login;
