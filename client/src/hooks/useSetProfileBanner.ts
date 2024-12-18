import { AppDispatch } from 'src/store/index';
import { useMutation } from '@tanstack/react-query';
import { setError, setSuccess, setLoading } from 'src/store/apiStatus/apiStatusSlice';
import { setUserProfileBanner } from 'src/api/services/profile/ProfileService';


const setUserBanner = (url: string) => 
      useMutation({
         mutationFn: () => setUserProfileBanner(url),
         onSuccess: () => dispatch(setSuccess('Your Profile Banner Has Been Updated !')),
         onError: (error: any) => {
            console.error('failed:', error);
            dispatch(setError('Your Profile Banner could not be updated...'));
         },
         onSettled: () => dispatch(setLoading())
      });
      
export default setUserBanner