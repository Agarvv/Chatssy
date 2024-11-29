import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@config/axiosConfig'; 
import { FormValues } from './formTypes';


const loginUser = async (data: FormValues) => {
  const response = await axiosInstance.post('/auth/login', data);
  return response.data; 
};

export const useLogin = () => {
  return useMutation(loginUser, {
    onSuccess: (data) => {
      console.log('welcome back!:', data);
    },
    onError: (error) => {
      console.error('something went wronh..:', error);
    }
  });
};