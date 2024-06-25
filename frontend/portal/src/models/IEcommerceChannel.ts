import { IProduct } from "@/models/IChannel";
import { IOpenTime } from "@/models/IOpenTime";

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
  opentime: IOpenTime;
}

export interface IProductInTable {
  name: string;
  price: string;
  description: string;
  url_link: string;
  key: number;
}

export interface TableOfProductProps {
  dataInTable: IProductInTable[];
  handleModal: () => void;
  handleDeleteProduct: (index:number) => void;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setDataEditProduct: React.Dispatch<React.SetStateAction<IProductInTable>>;
}

// -----------------------------------------------
// export interface ProductData {
//   name: string;
//   price: string;
//   description: string;
//   url_link: string;
// }

export interface IProductModalProps {
  isOpen: boolean;
  isEdit: boolean;
  onClose: () => void;
  handleSubmit: () => void;
  handleEditProduct: (index:number) => void;
  dataEditProduct: IProductInTable;
  dataCreateProduct: IProductInTable;
  setDataCreateProduct: React.Dispatch<React.SetStateAction<IProductInTable>>;
  setDataEditProduct: React.Dispatch<React.SetStateAction<IProductInTable>>;
}
