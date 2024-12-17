import { useQuery } from '@tanstack/react-query';
import { Profile } from 'src/types/profile/Profile';
import { getUserProfile, setUserProfilePicture, setUserProfileBio, setUserProfileBanner } from 'src/api/services/profile/ProfileService';
import { useDispatch } from 'react-redux';
import { setError, setSuccess, setLoading } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';
import { useMutation } from '@tanstack/react-query';

interface Props {
    id: number
}

const useProfile = ({ id }: Props) => {
   const dispatch: AppDispatch = useDispatch();
   
   const { data, error } = useQuery<Profile>({
      queryKey: ['profile', id],
      queryFn: () => getUserProfile(id),
   });

   if (data) {
      console.log('user profile', data);
   }

   if (error) {
      dispatch(setError("Something went wrong while fetching user profile..."));
   }

   const handleMutation = (mutationFn: Function, successMessage: string, errorMessage: string) => {
      const mutation = useMutation({
         mutationFn,
         onSuccess: () => dispatch(setSuccess(successMessage)),
         onError: (error: any) => {
            console.error('failed:', error);
            dispatch(setError(errorMessage));
         },
         onSettled: () => dispatch(setLoading())
      });

      return mutation;
   };

   const setUserPicture = (url: string) => handleMutation(() => setUserProfilePicture(url), 'Your Profile Picture Has Been Updated !', 'Your Profile picture could not be updated...');
   const setUserBio = (bio: string) => handleMutation(() => setUserProfileBio(bio), 'Your Profile BIO Has Been Updated !', 'Your Profile BIO could not be updated...');
   const setUserBanner = (url: string) => handleMutation(() => setUserProfileBanner(url), 'Your Profile Banner Has Been Updated !', 'Your Profile Banner could not be updated...');

   return { profile: data, setUserPicture, setUserBio, setUserBanner };
}

export default useProfile;