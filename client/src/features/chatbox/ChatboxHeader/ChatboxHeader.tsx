import React from 'react';
import styles from './ChatboxHeader.module.css';

const ChatboxHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.hUser}>
        <div className={styles.hUserImg}>
          <img src="Screenshot_20240928-011835.png" alt="Profile" />
          <div className={styles.hUserStatus}></div>
        </div>
        <div className={styles.hUserData}>
          <p className={styles.hUsername}>Elver Galarga</p>
          <p className={styles.hBio}>Me gusta el helado de fresa</p>
        </div>
      </div>
      <div className={styles.hActions}>
        <div>
          <i className="fa fa-phone"></i>
        </div>
        <div>
          <i className="fa fa-video-camera"></i>
        </div>
      </div>
    </header>
  );
};

export default ChatboxHeader;
