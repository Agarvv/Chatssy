import React from 'react'
import styles from './ChatboxFooterImageButton.module.css'
import sharedMediaButtonStyles from '../ChatboxFooter.module.css'


const ChatboxFooterImageButton = () => {
  return (
    <>
      <div className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbImage}`}>
          <i className="fa fa-image"></i>
      </div>
    </>
  )
}

export default ChatboxFooterImageButton