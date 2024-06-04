import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarPortal from "@/components/NavbarPortal/NavbarPortal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ainbox-portal",
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
        <NavbarPortal />
        <div className="flex pt-[70px] pl-[150px]">
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
