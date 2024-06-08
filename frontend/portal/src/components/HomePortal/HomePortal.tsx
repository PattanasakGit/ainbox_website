"use client"
import CustomBreadcrumb from "@/components/Breadcrumb/Breadcrumb";
import NavbarPortal from "@/components/NavbarPortal/NavbarPortal";
import MianSidebar from "@/components/SidebarPortal/MianSidebar";
import React, { useEffect, useState } from "react";
import { queryStoresByPageId } from "../../service/PageService";
import CardChannel from "./CardChannel";
import AddChannelButton from "./AddChannel";
import { Skeleton } from "antd";

const HomePortal: React.FC = () => {
  const [channels, setChannels] = useState<IStore[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const pageQueryResult = await queryStoresByPageId("Ub4ba514371a70b57f9ed28c8bdfcf9db");
      setChannels(pageQueryResult);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="w-full h-screen">
      <NavbarPortal />
      <div className="pt-[70px] pl-[200px]">
        <MianSidebar />
        <CustomBreadcrumb />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-fr p-16 pt-8">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
              <>
                <Skeleton key={index} active />
                <Skeleton key={index} active />
              </>
              ))
            : channels.map((channel, index) => (
                <CardChannel
                  key={index}
                  name={channel.details.business_name}
                  title={channel.details.description}
                />
              ))}
          {!loading && <AddChannelButton />}
        </div>
      </div>
    </section>
  );
};

export default HomePortal;
