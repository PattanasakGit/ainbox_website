import axios, { AxiosError, AxiosResponse } from "axios";
import { IStore, IBusiness, IProductToHandle, IBusinessToHandle} from "@/models/IChannel";
import { mockListChannel } from "@/service/PageService"; //ใช้สำหรับการทดสอบเท่านั้น
import { IProduct } from "@/models/IChannel";

const API_URL = "http://localhost:3002/api"; //อย่าลืมย้ายไปใส่ env

const getAuthToken = () => {
  return localStorage.getItem('token');
};

const apiCall = async <T>(
  method: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  data: unknown = null
): Promise<T> => {
  try {
    const token = getAuthToken();
    const response: AxiosResponse<T> = await axios({
      method,
      url: `${API_URL}${url}`,
      data,
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: AxiosError | any) {
    throw error;
  }
};

const ecommerceService = {
  async createShop(page_id: string, shopDetail: IStore): Promise<IStore> {
    return await apiCall("post", `/createStore/${page_id}`, shopDetail);
  },
  //ส่งข้อมูลบางอย่าของ User ไปแล้วรอรับ IStore[] กลับมายัง frontend
  async listChannel(userId: string): Promise<IBusiness[]> {
    //----ใช้งานจริง
    // return await apiCall("get", "/listChannel", user);
    return await apiCall("get", `/getBusinesses/${userId}`);
    //----MockData
    // return await mockListChannel(user)
  },
  async listProduct(businessId: string): Promise<IProduct[]> {
    return await apiCall("get", `/getProducts/${businessId}`);
  },
  //ส่งข้อมูลทั้งหมดไป backend เพื่อสร้าง Channel ใหม่
  async createChannel(channelDetail: IBusinessToHandle): Promise<IBusiness> {
    return await apiCall("post", "/business", channelDetail);
  },
  async createProduct(productDetail: IProductToHandle): Promise<IProduct> {
    return await apiCall("post", "/product", productDetail);
  },
  async editChennel(id: string, dataToEdit: IBusinessToHandle): Promise<IBusiness> {
    return await apiCall("patch", `/updateBusiness/${id}`, dataToEdit);
  },
  //อัพเดต ข้อมูลเพาะส่วนของ Product
  async editProduct(id: string, dataToEdit: IProductToHandle): Promise<IProduct> {
    return await apiCall("patch", `/updateProduct/${id}`, dataToEdit);
    //ที่แยกออกมาจาก edit เพราะว่าเผื่อต้องทำอะไรหากไม่ได้ทำอะไร สามารถใช้เส้น edit ได้เลย
  },
  async delete(id: string): Promise<unknown> {
    return await apiCall("delete", `/delete/${id}`);
  },
};

export default ecommerceService;
