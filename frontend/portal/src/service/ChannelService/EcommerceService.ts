import axios, { AxiosResponse, AxiosError } from 'axios';

const API_URL = '/api';

interface DataToSubmit {
    [key: string]: unknown;
  }
  
  interface DataToUpdate {
    [key: string]: unknown;
  }
  
  interface DataToEdit {
    [key: string]: unknown;
  }

const apiCall = async <T>(method: 'get' | 'post' | 'put' | 'patch' | 'delete', url: string, data: unknown = null): Promise<unknown> => {
  try {
    const response: AxiosResponse<T> = await axios({
      method,
      url: `${API_URL}${url}`,
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error: AxiosError | any) {
    throw error;
  }
};

const ecommerceService = { 
  async submit(dataToSubmit: DataToSubmit): Promise<unknown> {
    return await apiCall('post', '/submit', dataToSubmit);
  },
  async update(id: string, dataToUpdate: DataToUpdate): Promise<unknown> {
    return await apiCall('put', `/update/${id}`, dataToUpdate);
  },
  async edit(id: string, dataToEdit: DataToEdit): Promise<unknown> {
    return await apiCall('patch', `/edit/${id}`, dataToEdit);
  },
  async delete(id: string): Promise<unknown> {
    return await apiCall('delete', `/delete/${id}`);
  },
};

export default ecommerceService;
