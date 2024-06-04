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
      {children}
    </>
  );
}
