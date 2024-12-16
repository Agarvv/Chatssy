import axiosInstance from 'src/config/axiosConfig';

export const getUserProfile = async (userId: number) => {
  const response = await axiosInstance.get(`/user/${userId}/`)
  return response.data.profile;
}

  