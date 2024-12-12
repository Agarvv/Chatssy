/* import { useMutation } from '@tanstack/react-query';
import axiosInstance from 'src/config/axiosConfig'; 

interface Options {
    endpoint: string,
    method: string
}

const useFetch = ({ endpoint, method }: Options) => {
  const dispatch: AppDispatch = useDispatch();

  return useMutation({
    mutationFn: async (data: any) => {
      const response = await axiosInstance.`${method}`(url, data);
      return response.data;
    },
    onMutate() {
      
    },
    onSuccess() {
     
    },
    onError(error: unknown) {
      const errorMsg = error instanceof Error ? error.message : errorMessage;
      dispatch(setError('Something Went Wrong...'));
    },
  });
}; */