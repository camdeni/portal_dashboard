import axios from 'axios';
import { GenericEnum } from 'src/utils/Enums';

const instance = axios.create({
  baseURL:
    process.env.REACT_APP_BACKEND_URI ?? 'https://api.staging.camveni.com/v1',
  headers: {
    Authorization: localStorage.getItem(GenericEnum.Token) || '',
  },
});

// register request interceptors
instance.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config;
  },
  async (error: any) => {
    return await Promise.reject(error);
  }
);

// register response interceptors
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

export default instance;
