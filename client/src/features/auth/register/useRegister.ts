import { useMutation } from '@tanstack/react-query';
import axiosInstance from 'src/config/axiosConfig'; 
import { FormValues } from './types';

import { useDispatch } from 'react-redux';
import { setLoading, setSuccess, setError, clearMessages } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/apiStatus/apiStatusStore';

const loginUser = async (data: FormValues): Promise<any> => {
  const response = await axiosInstance.post('/auth/register', data);
  return response.data;
};

export const useRegister = () => {
  const dispatch: AppDispatch = useDispatch(); 
  return useMutation({
    mutationFn: (data: FormValues) => registerUser(data),
    onMutate: () => {
      dispatch(setLoading()); 
    },
    onSuccess: (data: any) => {
      console.log('Welcome!:', data);
      dispatch(setSuccess('Welcome!')); 
    },
    onError: (error: Error) => {
      console.error('Something went wrong..:', error);
      dispatch(setError('Something Went Wrong...'));  
    },
    onSettled: () => {
      dispatch(clearMessages());
    }
  });
};