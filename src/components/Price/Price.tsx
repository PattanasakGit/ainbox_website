import React from "react";
import Title from "../Title/Title";
import PricingCard from "./PricingCard";
import { PricingData } from "@/store/PricingData";

const Price: React.FC = () => {
  return (
    <section className="w-full">
      <Title text={"ราคา"} />
      <div className="flex flex-wrap justify-center gap-6 bg-[#fff] p-8 pt-0 sm:pt-8">
        {PricingData.map((packageData, index) => (
          <PricingCard key={index} data={packageData} />
        ))}
      </div>
    </section>
  );
};

export default Price;