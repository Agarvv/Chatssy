import React from 'react'

import styles from './ChatboxFooterAudioButton.module.css'
import sharedMediaButtonStyles from '../ChatboxFooter.module.css'

const ChatboxFooterAudioButton = () => {
  return (
    <>
       <div className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbAudio}`}>
         <i className="fa fa-microphone"></i>
       </div>
    </>
  )
}

export default ChatboxFooterAudioButton