import React from 'react'

import styles from './ChatboxFooterVideoButton.module.css'
import sharedMediaButtonStyles from '../ChatboxFooter.module.css'

const ChatboxFooterVideoButton = () => {
  return (
    <>
      <div className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbVideo}`}>
          <i className="fa fa-video"></i>
      </div>
    </>
  )
}

export default ChatboxFooterVideoButton