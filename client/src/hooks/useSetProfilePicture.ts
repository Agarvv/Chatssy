import { AppDispatch } from 'src/store/index';
import { useMutation } from '@tanstack/react-query';
import { setError, setSuccess, setLoading } from 'src/store/apiStatus/apiStatusSlice';
import { setUserProfilePicture } from 'src/api/services/profile/ProfileService';

const setUserPicture = (url: string) => 
      return useMutation({
         mutationFn: () => setUserProfilePicture(url),
         onSuccess: () => dispatch(setSuccess('Your Profile Picture Has Been Updated !')),
         onError: (error: any) => {
            console.error('failed:', error);
            dispatch(setError('Your Profile picture could not be updated...'));
         },
         onSettled: () => dispatch(setLoading())
      });
      
       
export default setUserPicture