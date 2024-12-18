import axiosInstance from 'src/config/axiosConfig';

export const getUserProfile = async (userId: number) => {
    const response = await axiosInstance.get(`/users/${userId}/`);
    return response.data.profile;
};

export const setUserProfilePicture = async (url: string) => {
    const response = await axiosInstance.post(
      '/users/update_profile_picture/', 
      { picture: url }, 
      { withCredentials: true }
    );
    return response.data;
};

export const setUserProfileBio = async (bio: string) => {
    const response = await axiosInstance.post(
      '/users/update_bio/', 
      { bio }, 
      { withCredentials: true }
    );
    return response.data;
};

export const setUserProfileBanner = async (url: string) => {
    const response = await axiosInstance.post(
      '/users/update_banner/', 
      { banner: url }, 
      { withCredentials: true }
    );
    return response.data;
};