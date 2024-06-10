export interface Address {
    subdistrict: string;
    district: string;
    province: string;
    zipcode: string;
}

export interface FormData {
    shopName: string;
    shopType: string;
    description: string;
    address: Address;
    phone: string;
    email: string;
}