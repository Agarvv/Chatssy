import React, { useEffect, useMemo } from 'react';
import CallButton from './CallButton/CallButton';
import VideoCallButton from './VideoCallButton/VideoCallButton';
import styles from './ChatboxHeader.module.css';
import logo from 'src/logo.svg';
import { useSelector } from 'react-redux';
import { ChatState } from 'src/store/chat/chatSlice'; 

const ChatboxHeader = () => {
  const chat = useSelector((state: ChatState) => state.chat);
  const userInfo = useMemo(() => chat?.user_to_display_info, [chat]);
  useEffect(() => { 
    console.log('chat in header', chat);
    console.log('userinfo', userInfo)
  }, [chat, userInfo]);



  return (
    <header className={styles.header}>
      <div className={styles.hUser}>
        <div className={styles.hUserImg}>
          <img src={logo} alt="Profile" />
          <div className={styles.hUserStatus}></div>
        </div>
        <div className={styles.hUserData}>
          <p className={styles.hUsername}>{userInfo?.username}</p>
          <p className={styles.hBio}>{userInfo?.bio}</p>
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
