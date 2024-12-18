import { AppDispatch } from 'src/store/index';
import { useMutation } from '@tanstack/react-query';
import { setError, setSuccess, setLoading } from 'src/store/apiStatus/apiStatusSlice';
import { setUserProfileBio } from 'src/api/services/profile/ProfileService';
import { useDispatch } from 'react-redux'; 

const useSetBio = () => {
  const dispatch: AppDispatch = useDispatch();

  return useMutation({
    mutationFn: (bio: string) => setUserProfileBio(url),
    onSuccess: () => dispatch(setSuccess('Your Profile bio Has Been Updated!')),
    onError: (error: any) => {
      console.error('failed:', error);
      dispatch(setError('Your Profile bio could not be updated...'));
    },
    onSettled: () => dispatch(setLoading())
  });
};

export default useSetBio;  