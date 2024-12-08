import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${process.env.API_URL}/api/chatssy`,
  timeout: 10000,  
});
//
export default axiosInstance;