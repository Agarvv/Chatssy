import { useMutation } from '@tanstack/react-query';
import axiosInstance from 'src/config/axiosConfig'; 
import { FormValues } from './types';



const registerUser = async (data: FormValues) => {
  const response = await axiosInstance.post('/auth/register', data);
  return response.data; 
};


export const useRegister = () => {
  return useMutation({
    mutationFn: (data: FormValues) => registerUser(data),
    onSuccess: (data: any) => {
      console.log('Welcome!:', data);
    },
    onError: (error: Error) => {
      console.error('Something went wrong..:', error);
    }
  })
};