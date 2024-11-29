import { useMutation } from '@tanstack/react-query';
import axiosInstance from 'src/config/axiosConfig'; 
import { FormValues } from './types';

const loginUser = async (data: FormValues): Promise<any> => {
  const response = await axiosInstance.post('/auth/login', data);
  return response.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: FormValues) => loginUser(data),
    onSuccess: (data: any) => {
      console.log('Welcome back!:', data);
    },
    onError: (error: Error) => {
      console.error('Something went wrong..:', error);
    }
  });
};
