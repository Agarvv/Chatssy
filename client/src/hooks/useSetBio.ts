import { AppDispatch } from 'src/store/index';
import { useMutation } from '@tanstack/react-query';
import { setError, setSuccess, setLoading } from 'src/store/apiStatus/apiStatusSlice';
import { setUserProfileBio } from 'src/api/services/profile/ProfileService';
import { useDispatch } from 'react-redux';  

const useSetUserBio = (bio: string) => {
  const dispatch: AppDispatch = useDispatch();

  return useMutation({
    mutationFn: () => setUserProfileBio(bio),
    onSuccess: () => dispatch(setSuccess('Your Profile BIO Has Been Updated!')),
    onError: (error: any) => {
      console.error('failed:', error);
      dispatch(setError('Your Profile BIO could not be updated...'));
    },
    onSettled: () => dispatch(setLoading())
  });
};

export default useSetUserBio;  