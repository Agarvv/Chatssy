import React, { useEffect, useMemo } from 'react';
import CallButton from './CallButton/CallButton';
import VideoCallButton from './VideoCallButton/VideoCallButton';
import styles from './ChatboxHeader.module.css';
import logo from 'src/logo.svg';
import { useSelector } from 'react-redux';
import { ChatState } from 'src/store/chat/chatSlice'; 

const ChatboxHeader = () => {
  const chat = useSelector((state: ChatState) => state.chat.chat);
  useEffect(() => { 
    console.log('chat in header', chat)
  }, [chat]);

  return (
    
    <header className={styles.header} key={chat?.id || 'default'}>
       <p>Chat Object Debug:</p>
        <pre style={{ background: '#f4f4f4', color: 'black', padding: '10px' }}>
          {JSON.stringify(chat.chat, null, 2) || 'Chat is null'}
        </pre>
      <div className={styles.hUser}>
        <div className={styles.hUserImg}>
          <img src={logo} alt="Profile" />
          <div className={styles.hUserStatus}></div>
        </div>
        <div className={styles.hUserData}>
          <p> {chat?.user_to_display_info?.username || 'Please select a chat'} </p>
          <p>{ chat?.id || 0}</p>
        </div>
      </div>
      <div className={styles.hActions}>
        <CallButton />
        <VideoCallButton />
      </div>
    </header>
  );
};

export default ChatboxHeader;
