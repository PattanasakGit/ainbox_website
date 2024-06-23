import { IOpenTime } from "./IOpenTime";

export interface Address {
    detailedAddress: any;
    subdistrict: string;
    district: string;
    province: string;
    zipcode: string;
}

export interface FormData {
    business_name: string;
    business_type: string;
    description: string;
    address: Address;
    phone: string;
    email: string;
    website: string;
    opentime: IOpenTime
}