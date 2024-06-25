import axios, { AxiosError, AxiosResponse } from "axios";
import { IStore, } from "@/models/IChannel";
import { mockListChannel } from "@/service/PageService"; //ใช้สำหรับการทดสอบเท่านั้น

const API_URL = "https://webhook.site/c676a33a-a08f-4d74-a9f4-531159acaa7f"; //อย่าลืมย้ายไปใส่ env

const apiCall = async <T>(
  method: "get" | "post" | "put" | "patch" | "delete",
  url: string,
  data: unknown = null
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url: `${API_URL}${url}`,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: AxiosError | any) {
    throw error;
  }
};

const ecommerceService = {
  //ส่งข้อมูลบางอย่าของ User ไปแล้วรอรับ IStore[] กลับมายัง frontend
  async listChannel(user:string): Promise<IStore[]> {
    //----ใช้งานจริง
    // return await apiCall("get", "/listChannel", user);

    //----MockData
    return await mockListChannel(user)
  },
  //ส่งข้อมูลทั้งหมดไป backend เพื่อสร้าง Channel ใหม่
  async create(dataToCreate: unknown): Promise<unknown> {
    return await apiCall("post", "/create", dataToCreate);
  },
  async update(id: string, dataToUpdate: unknown): Promise<unknown> {
    return await apiCall("put", `/update/${id}`, dataToUpdate);
  },
  //แก้ไขข้อมูลบางส่วน
  async edit(id: string, dataToEdit: unknown): Promise<unknown> {
    return await apiCall("patch", `/edit/${id}`, dataToEdit);
  },
  //อัพเดต ข้อมูลเพาะส่วนของ Product
  async updateProduct(page_id: string, dataToEdit: unknown): Promise<unknown> {
    console.log('EcomService: ',dataToEdit); // ทดสอบเท่่านั้น
    return await apiCall("patch", `/updateProduct/${page_id}`, dataToEdit);
    //ที่แยกออกมาจาก edit เพราะว่าเผื่อต้องทำอะไรหากไม่ได้ทำอะไร สามารถใช้เส้น edit ได้เลย
  },
  async delete(id: string): Promise<unknown> {
    return await apiCall("delete", `/delete/${id}`);
  },
};

export default ecommerceService;
