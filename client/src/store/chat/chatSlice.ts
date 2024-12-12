import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from 'src/types/chat/Chat';
import { Contacts } from 'src/types/chat/contacts/Contacts'

interface ChatState {
    chat: Chat;
    contacts: Contacts 
}

const initialState: ChatState = {
    chat: {} as Chat, 
    contacts: {} as Contacts 
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, action: PayloadAction<Chat>) => {
            state.chat = action.payload; 
        },
        setContacts: (state, action: PayloadAction<Contacts>) => {
            state.contacts = action.payload; 
        }
    },
});

export const { setChat, setContacts } = chatSlice.actions;
export default chatSlice.reducer;