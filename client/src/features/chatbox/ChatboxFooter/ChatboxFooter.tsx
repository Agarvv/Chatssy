import React from 'react';
import styles from './ChatboxFooter.module.css';


import ChatboxFooterImageButton from './ChatboxFooterImageButton/ChatboxFooterImageButton';
import ChatboxFooterAudioButton from './ChatboxFooterAudioButton/ChatboxFooterAudioButton';
import ChatboxFooterVideoButton from './ChatboxFooterVideoButton/ChatboxFooterVideoButton';
import ChatboxFooterSubmitMessage from './ChatboxFooterSubmitMessage/ChatboxFooterSubmitMessage';

const ChatboxFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.fMediaButtons}>
        { /* send audio button */ } 
        <ChatboxFooterAudioButton />

        { /* send video button */ } 
        <ChatboxFooterVideoButton />
        
        { /* send image button */ } 
        <ChatboxFooterImageButton />
      </div>
      <div className={styles.fInp}>
        <input type="text" placeholder="Send A Message" />
      </div>
      <div className={styles.fSubmit}>
      { /* submit messsage button */ } 
         <ChatboxFooterSubmitMessage />
      </div>
    </footer>
  );
};

export default ChatboxFooter;
