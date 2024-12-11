import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Chat from 'src/types/chat/Chat';

interface ChatState {
    chat: Chat;
}

const initialState: ChatState = {
    chat: {} as Chat, 
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, action: PayloadAction<Chat>) => {
            state.chat = action.payload; 
        },
    },
});

export const { setChat } = chatSlice.actions;
export default chatSlice.reducer;