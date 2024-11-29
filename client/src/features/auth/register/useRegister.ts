import { useMutation } from '@tanstack/react-query';
import axiosInstance from '@config/axiosConfig'; 
import { FormValues } from './formTypes';



const registerUser = async (data: FormValues) => {
  const response = await axiosInstance.post('/auth/register', data);
  return response.data; 
};


export const useRegister = () => {
  return useMutation(registerUser, {
    onSuccess: (data) => {
      console.log('User registered successfully:', data);
    },
    onError: (error) => {
      console.error('Error registering user:', error);
    }
  });
};