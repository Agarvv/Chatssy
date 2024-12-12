import { useMutation } from '@tanstack/react-query';
import { createChat } from 'src/api/services/chat/ChatService';

interface Props {
    userId: number; 
}

const useNewChat = ({ userId }: Props) => {
    return useMutation({
        mutationFn: () => createChat(userId),
        onSuccess: (data) => {
            console.log('Chat creation success', data);
        },
        onError: (error: any) => {
            console.error('Chat creation failed:', error);
        }
    });
};

export default useNewChat;