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
  _id: string;
  name: string;
  price: string;
  description: string;
  url_link: string;
}
export interface IProductToHandle {
  _id?: string;
  name?: string;
  price?: string;
  description?: string;
  url_link?: string;
}
export interface IBusiness {
  _id: string;
  user_id: string;
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
  ai_gender: string;
}

export interface IBusinessToHandle {
  _id?: string;
  user_id?: string;
  ai_name?: string;
  ai_behavior?: string;
  ai_age?: string;
  business_name?: string;
  business_type?: string;
  address?: Address;
  phone?: string;
  email?: string;
  website?: string;
  opentime?: IOpenTime;
  descriptio?: string;
  ai_gender?: string;
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
  product: IProductToHandle[];
  ai_gender: string;
}

export interface IStore {
  page_id: string;
  details: IStoreDetails;
}

export interface IFormAiDetail {
  ai_name: string;
  ai_behavior: string;
  ai_age: string;
  ai_gender: string;
}
