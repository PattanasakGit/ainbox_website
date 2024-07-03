import NavbarPortal from "@/components/NavbarPortal/NavbarPortal";

export default function ChannelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarPortal />
     <div className="flex pt-[70px] pl-[200px] relative"> 

        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
