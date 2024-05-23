interface PricingCardProps {
    data: {
      name: string;
      price: string;
      text: string;
      features: {
        nameFeature: string;
        available: boolean;
      }[];
    };
  }