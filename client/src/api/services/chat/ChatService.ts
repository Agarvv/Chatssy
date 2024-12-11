import axiosInstance from 'src/config/axiosConfig'

export const createChat = async (userId: number) => {
    return axiosInstance.post('/chats/create', {
        userId: userId
    }, withCredentials: true )
}