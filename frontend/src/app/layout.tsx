import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/LandingPage/Footer/Footer";
import CustomNavbar from "../components/LandingPage/NavBar/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ainbox 🤖",
  description: "AI In Your Box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={inter.className}>
      <div className="bg-[url('/bg.webp')] bg-cover bg-no-repeat bg-fixed w-[99vw] h-screen">
        {children}
        </div>
      </body>
    </html>
  );
}
