import React, { useEffect, useMemo } from 'react';
import CallButton from './CallButton/CallButton';
import VideoCallButton from './VideoCallButton/VideoCallButton';
import styles from './ChatboxHeader.module.css';
import logo from 'src/logo.svg';
import { useSelector } from 'react-redux';
import { ChatState } from 'src/store/chat/chatSlice'; 

const ChatboxHeader = () => {
  const state = useSelector((state: ChatState) => state);
  useEffect(() => { 
    console.log('chat in header', state)
  }, [state]);

  return (
    
    <header className={styles.header}>
       <p>Chat Object Debug:</p>
        <pre style={{ background: '#f4f4f4', color: 'black', padding: '10px' }}>
          {JSON.stringify(state, null, 2) || 'Chat is null'}
        </pre>
      <div className={styles.hUser}>
        <div className={styles.hUserImg}>
          <img src={logo} alt="Profile" />
          <div className={styles.hUserStatus}></div>
        </div>
        <div className={styles.hUserData}>
          <p> username </p>
          <p>id</p>
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
