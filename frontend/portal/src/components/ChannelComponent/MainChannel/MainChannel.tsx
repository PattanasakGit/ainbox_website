"use client";
import { IStore } from "@/models/IChannel";
import React, { useEffect, useState } from "react";
import { useDataChannel } from "@/store/dataChannel";
import AinboxLoading from "@/components/Loading/Loading";
import ecommerceService from "@/service/ChannelService/EcommerceService";
import CardChannel from "@/components/ChannelComponent/MainChannel/CardChannel";
import AddChannelButton from "@/components/ChannelComponent/MainChannel/AddChannel";

const MainChannel: React.FC = () => {
  const [channels, setChannels] = useState<IStore[]>([]);
  const [loading, setLoading] = useState(true);
  const { setDataChannel } = useDataChannel();

  useEffect(() => {
    const fetchData = async () => {
      const channelDataResponse = await ecommerceService.listChannel("Ub4ba514371a70b57f9ed28c8bdfcf9db");
      setChannels(channelDataResponse);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="w-full h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 auto-rows-fr p-16 pt-0">
        {loading
          ? <div className="w-[80vw]"><AinboxLoading/></div>
          : channels.map((channel, index) => (
            <div onClick={()=>{setDataChannel(channel)}}>
              <CardChannel
                key={index}
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
