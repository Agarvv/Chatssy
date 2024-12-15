import React from 'react';

import ChatboxHeader from './ChatboxHeader/ChatboxHeader';
import Message from './Message/Message';
import ChatboxFooter from './ChatboxFooter/ChatboxFooter';
import styles from './Chatbox.module.css'
import { useSelector } from 'react-redux';
import { ChatState } from 'src/store/chat/chatSlice'; 

const Chatbox = () => {
   const chat = useSelector((state: ChatState) => state.activeChat)
   console.log('chat from store', chat)

  return (
    <main className={styles.chatbox}>
     <ChatboxHeader />
      
      <div className={styles.messageList}>
        {chat?.messages?.map((message: any) => (
           <Message />
        ))}
      </div>
      
      <ChatboxFooter />
    </main>
  );
};

export default Chatbox;