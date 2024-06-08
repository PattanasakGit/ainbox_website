interface CardChannelProps {
    name: string;
    title: string;
  }
  
interface IProduct {
    name: string;
    price: string;
    description: string;
}

interface IStoreDetails {
    ai_name: string;
    ai_behavior: string;
    ai_age: string;
    business_name: string;
    business_type: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    website: string;
    hours: string;
    description: string;
    product: IProduct[];
    ai_gender: string;
}

interface IStore {
    _id: { $oid: string };
    page_id: string;
    details: IStoreDetails;
}