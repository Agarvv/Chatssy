import axiosInstance from 'src/config/axiosConfig'

export const createChat = async (userId: number) => {
    return axiosInstance.post('/chats/create', {
        userId: userId
    }, withCredentials: true )
}

export const getUserContacts = async () => {
    axiosInstance.get('/chats/', {
        withCredentials: true 
    })
}