"use client";
import { Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { queryStoresByPageId } from "@/service/PageService";
import AddChannelButton from "@/components/ChannelComponent/MainChannel/AddChannel";
import CardChannel from "@/components/ChannelComponent/MainChannel/CardChannel";
import { IStore } from "@/models/IChannel";
import { useDataChannel } from "@/store/dataChannel";

const MainChannel: React.FC = () => {
  const [channels, setChannels] = useState<IStore[]>([]);
  const [loading, setLoading] = useState(true);
  const { setDataChannel } = useDataChannel();

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-fr p-16 pt-0">
        {loading
          ? Array.from({ length: 20 }).map((_, index) => (
              <Skeleton key={index} active />
            ))
          : channels.map((channel) => (
            <div onClick={()=>{setDataChannel(channel)}}>
              <CardChannel
                key={channel._id.$oid}
                name={channel.details.business_name}
                title={channel.details.description}
              />
            </div>
            ))}
        {!loading && <AddChannelButton />}
      </div>
    </section>
  );
};

export default MainChannel;
