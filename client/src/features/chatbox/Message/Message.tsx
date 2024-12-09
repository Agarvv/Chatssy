import React from 'react';
import styles from './Message.module.css';

const Message = () => {
  return (
    <div className={styles.message}>
      <div className={styles.messageUser}>
        <img src="Screenshot_20240928-011835.png" alt="User" />
      </div>
      <div className={styles.messageContent}>
        <div className={styles.messageDate}>
          <p>17 November 14:31</p>
        </div>
        <div className={styles.messageText}>
          <p>Juan, no te lo dije pero creo que te rayé el coche...</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
