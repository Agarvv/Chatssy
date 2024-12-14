import React from 'react';
import { useEffect } from 'react';
import CallButton from './CallButton/CallButton';
import VideoCallButton from './VideoCallButton/VideoCallButton';
import styles from './ChatboxHeader.module.css';
import logo from 'src/logo.svg';
import { useSelector } from 'react-redux';
import { ChatState } from 'src/store/chat/chatSlice'; 


const ChatboxHeader = () => {
  const chat = useSelector((state: ChatState) => state.chat)
  const cState = useSelector((state: ChatState) => state)
  useEffect(() => { 
    console.log('chat in header', cState)
  }, [chat]);
  return (
    <header className={styles.header}>
      <div className={styles.hUser}>
        <div className={styles.hUserImg}>
          <img src={logo} alt="Profile" />
          <div className={styles.hUserStatus}></div>
        </div>
        <div className={styles.hUserData}>
          <p className={styles.hUsername}>{chat?.user_to_display_info.username} ?? 'Not Provided'</p>
          <p className={styles.hBio}>{chat?.user_to_display_info.bio}</p>
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
