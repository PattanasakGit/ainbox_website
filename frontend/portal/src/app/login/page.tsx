"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";

const GoogleLoginButton = dynamic(() => import("./googleLogin"), {
  ssr: false,
});

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const clientId =
    "1037698577728-825l0c6g03vookbm4gkp03pp45o0c3oc.apps.googleusercontent.com";
  const frontendUrl =
    process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3001";
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3002";

  const onSuccess = (response: any) => {
    console.log("Google login success:", response);

    const email = response.wt.cu || "";

    // Store user email and login type in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("loginType", "google");

    router.push(frontendUrl);
  };

  const onFailure = (response: any) => {
    console.log("Google login failure:", response);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${backendUrl}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(
          "Login failed. Please check your credentials and try again."
        );
      }

      const data = await response.json();
      console.log("Login data:", data);

      if (!data.user) {
        throw new Error("Invalid response format. Please try again later.");
      }

      localStorage.setItem("userEmail", data.user.email);
      localStorage.setItem("userId", data.user.id);
      localStorage.setItem("loginType", "normal");
      localStorage.setItem("token", data.token);
      console.log("Login success:", localStorage.getItem("userId"));

      router.push(frontendUrl);
    } catch (error) {
      console.error("Login error:", error);
      alert(
        "Login failed. Your Email or Password is incorrect. Please try again."
      );
    }
  };

  return (
    <section className="flex justify-center items-center h-screen bg-[url('/images/bg.webp')] bg-cover bg-fixed bg-center">
      <div className="w-[450px] p-8 bg-white rounded-2xl shadow-2xl text-center">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="mb-6 text-left">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              รหัสผ่าน
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <Link href="#">
            <button className="w-full bg-green-500 text-white py-2 my-4 rounded-md hover:bg-green-600 transition-colors duration-200">
              ปุ่มนี้สมมติว่า Login ได้ DEV MODE
            </button>
          </Link>
        </form>
        <GoogleLoginButton
          clientId={clientId}
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
        <div className="my-4">
          <Link
            href="/forget_password"
            className="text-orange-500 hover:underline"
          >
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
