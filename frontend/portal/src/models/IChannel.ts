import { Address } from "@/models/IEcommerceChannel";
import { IOpenTime } from "@/models/IOpenTime";

export enum ChannelType {
  ECommerce = "ECommerce",
  DataWarehouse = "DataWarehouse",
  Personal = "Personal",
}

export interface CardChannelProps {
  name: string;
  title: string;
  onClick?: () => void;
}

export interface IProduct {
  name: string;
  price: string;
  description: string;
  url_link: string;
}

export interface IStoreDetails {
  ai_name: string;
  ai_behavior: string;
  ai_age: string;
  business_name: string;
  business_type: string;
  address: Address;
  phone: string;
  email: string;
  website: string;
  opentime: IOpenTime;
  description: string;
  product: IProduct[];
  ai_gender: string;
}

export interface IStore {
  _id: { $oid: string };
  page_id: string;
  details: IStoreDetails;
}

export interface IFormAiDetail {
  ai_name: string;
  ai_behavior: string;
  ai_age: string;
  ai_gender: string;
}
