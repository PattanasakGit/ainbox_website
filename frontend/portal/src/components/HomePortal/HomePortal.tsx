import MianSidebar from "@/components/SidebarPortal/MianSidebar";
import Link from "next/link";
import React from "react";
import CustomBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
import NavbarPortal from "@/components/NavbarPortal/NavbarPortal";
const HomePortal: React.FC = () => {
  return (
    <section className="w-full h-screen">
      <NavbarPortal />
      <div className=" pt-[70px] pl-[200px]">
        <MianSidebar />
        <CustomBreadcrumb />
        <div className="w-full">
          <Link href={"/channel_manager"}>
            <button className="h-32 w-full bg-green-700">กด</button>
          </Link>
        </div>

        <div>
          <h1>This is Potal Home page</h1>
        </div>
      </div>
    </section>
  );
};
export default HomePortal;
