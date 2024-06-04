import React from "react";
import NavbarPortal from "../../components/Portal/NavbarPortal/NavbarPortal";

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarPortal />
      <div className="flex pt-[70px] pl-[150px]">
        <div className="w-full">
            {children}
        </div>
      </div>
    </>
  );
}
