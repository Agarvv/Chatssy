import React from 'react';

import ChatboxHeader from './ChatboxHeader/ChatboxHeader';
import Message from './Message/Message';
import ChatboxFooter from './ChatboxFooter/ChatboxFooter';
import styles from './Chatbox.module.css'

const Chatbox = () => {
  return (
    <main className={styles.chatbox}>
     <ChatboxHeader />
      
      <div className={styles.messageList}>
        <Message />
      </div>
      

      <ChatboxFooter />
    </main>
  );
};

export default Chatbox;