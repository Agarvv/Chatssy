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

   const mutationConfig = (mutationFn: Function, successMessage: string, errorMessage: string) => ({
      mutationFn,
      onSuccess: () => dispatch(setSuccess(successMessage)),
      onError: (error: any) => {
         console.error('failed:', error);
         dispatch(setError(errorMessage));
      },
      onSettled: () => dispatch(setLoading())
   });

   const setUserPicture = (url: string) => 
      useMutation(mutationConfig(() => setUserProfilePicture(url), 'Your Profile Picture Has Been Updated !', 'Your Profile picture could not be updated...'));

   const setUserBio = (bio: string) => 
      useMutation(mutationConfig(() => setUserProfileBio(bio), 'Your Profile BIO Has Been Updated !', 'Your Profile BIO could not be updated...'));

   const setUserBanner = (url: string) => 
      useMutation(mutationConfig(() => setUserProfileBanner(url), 'Your Profile Banner Has Been Updated !', 'Your Profile Banner could not be updated...'));

   return { profile: data, setUserPicture, setUserBio, setUserBanner };
}

export default useProfile;