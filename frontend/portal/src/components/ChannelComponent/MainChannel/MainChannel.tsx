import { IBusiness } from "@/models/IChannel";
import React, { useEffect, useState } from "react";
import { useDataChannel } from "@/store/dataChannel";
import AinboxLoading from "@/components/Loading/Loading";
import ecommerceService from "@/service/ChannelService/EcommerceService";
import CardChannel from "@/components/ChannelComponent/MainChannel/CardChannel";
import AddChannelButton from "@/components/ChannelComponent/MainChannel/AddChannel";
import { ScollUpToTop } from "@/utils/Scoll";

const MainChannel: React.FC = () => {
  ScollUpToTop();
  const [channels, setChannels] = useState<IBusiness[]>([]);
  const [loading, setLoading] = useState(true);
  const { setDataChannel } = useDataChannel();
  const getUserID = () => {
    return localStorage.getItem("userId");
  }

  useEffect(() => {
    const fetchData = async () => {
      const channelDataResponse = await ecommerceService.listChannel(getUserID()!);
      setChannels(channelDataResponse);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="w-full h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 auto-rows-fr p-16 pt-0">
        {loading ? (
          <div className="w-[80vw]"><AinboxLoading /></div>
        ) : (
          channels.map((channel) => (
            <div key={`${channel._id}-${channel.user_id}`} onClick={() => setDataChannel(channel)}>
              <CardChannel
                name={channel.business_name}
                title={channel.description}
              />
            </div>
          ))
        )}
        {!loading && <AddChannelButton />}
      </div>
    </section>
  );
};

export default MainChannel;