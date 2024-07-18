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
  data: unknown = {}
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
    if (error.response && error.response.status === 401) {
      window.location.href = 'http://localhost:3001/login';
    }
    console.log('error = ',error);
    
    throw error;
  }
};

const ecommerceService = {
  async createShop(page_id: string, shopDetail: IStore): Promise<IStore> {
    return await apiCall("post", `/createStore/${page_id}`, shopDetail);
  },
  async listChannel(userId: string): Promise<IBusiness[]> {
    return await apiCall("get", `/getBusinesses/${userId}`);

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
  async deleteChennel(id: string): Promise<unknown> {
    return await apiCall("delete", `/deleteBusiness/${id}`);
  },
  async deleteProuct(id: string): Promise<unknown> {
    return await apiCall("delete", `/deleteProduct/${id}`);
  },
};

export default ecommerceService;
