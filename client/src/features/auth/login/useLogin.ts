import { useMutation } from '@tanstack/react-query';
import axiosInstance from 'src/config/axiosConfig'; 
import { FormValues } from './types';

import { useDispatch } from 'react-redux';
import { setLoading, setSuccess, setError, clearMessages } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/apiStatus/apiStatusStore';

const loginUser = async (data: FormValues): Promise<any> => {
  const response = await axiosInstance.post('/auth/login', data);
  return response.data;
};

export const useLogin = () => {
  const dispatch: AppDispatch = useDispatch(); 
  return useMutation({
    mutationFn: (data: FormValues) => loginUser(data),
    onMutate: () => {
        dispatch(setLoading()); 
    }, 
    onSuccess: (data: any) => {
      console.log('Welcome back!:', data);
      dispatch(setSuccess('Welcome Back!'))
    },
    onError: (error: Error) => {
      console.error('Something went wrong..:', error);
      dispatch(setError('Something went wrong...'))
    }
  });
};
