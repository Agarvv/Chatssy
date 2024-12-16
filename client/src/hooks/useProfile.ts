import { useQuery } from '@tanstack/react-query';
import { Profile } from 'src/types/profile/Profile';
import { getUserProfile } from 'src/api/services/profile/ProfileService';
import { useDispatch } from 'react-redux';
import { setError } from 'src/store/apiStatus/apiStatusSlice';
import { AppDispatch } from 'src/store/index';

interface Props {
    id: number
}
// get user profile hook 
const useProfile = ({ id}: Props) => {
   const dispatch: AppDispatch = useDispatch();
   const { data, error } = useQuery<Profile>({
          queryKey: ['profile'],
          queryFn: () => {
             return getUserProfile(id);
          }
   })

   if(data) {
    console.log('user profile', data)   
  }

  if(error) {
    dispatch(setError("Something went wrong while fetching user profile..."))
  }

   return { profile: data }
}

export default useProfile;