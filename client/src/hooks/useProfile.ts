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

   const setUserPicture = (url: string) => 
      useMutation({
         mutationFn: () => setUserProfilePicture(url),
         onSuccess: () => dispatch(setSuccess('Your Profile Picture Has Been Updated !')),
         onError: (error: any) => {
            console.error('failed:', error);
            dispatch(setError('Your Profile picture could not be updated...'));
         },
         onSettled: () => dispatch(setLoading())
      });

   const setUserBio = (bio: string) => 
      useMutation({
         mutationFn: () => setUserProfileBio(bio),
         onSuccess: () => dispatch(setSuccess('Your Profile BIO Has Been Updated !')),
         onError: (error: any) => {
            console.error('failed:', error);
            dispatch(setError('Your Profile BIO could not be updated...'));
         },
         onSettled: () => dispatch(setLoading())
      });

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

   return { profile: data, setUserPicture, setUserBio, setUserBanner };
}

export default useProfile;