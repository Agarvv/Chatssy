import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from 'src/types/chat/Chat';
import { Contacts } from 'src/types/chat/contacts/Contacts'

export interface ChatState {
    chat: any | null;
    contacts: any | null; 
}

const initialState: ChatState = {
    chat: null, 
    contacts: null 
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setChat: (state, action: PayloadAction<any>) => {
            return { ...state, chat: action.payload }; 
        },
        setContacts: (state, action: PayloadAction<any>) => {
            return { ...state, contacts: action.payload }; 
        }
    },
});


export const { setChat, setContacts } = chatSlice.actions;
export default chatSlice.reducer;