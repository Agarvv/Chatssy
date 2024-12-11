import ChatUser from './ChatUser'
import Message from './Message'


export type Chat {
    id: number,
    type: string, // 'chat' or 'group'
    user: ChatUser,
    messages: Message[] 
}