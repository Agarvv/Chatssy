import React from 'react'

import styles from './ChatboxFooterVideoButton.module.css'
import sharedMediaButtonStyles from '../ChatboxFooter.module.css'

import MediaUpload from 'src/layout/media-upload/MediaUpload';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useMessage } from 'src/hooks/useMessage'


const ChatboxFooterVideoButton = () => {
    const { emitMessage } = useMessage() 
    const chat = useSelector((state: RootState) => state.chat.activeChat);
    const { imageUrl, uploadImage } = useImageUpload();
    
    
    const handleVideoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                await uploadImage(file, 'video');
                console.log('video uploaded successfully!', imageUrl);
                const message = {
                  'type': 'video',
                  'value': imageUrl,
                  'identifier': chat.id,
                  'receiver_id': chat.user_to_display_info.id 
                }
                console.log('Final message object', message)
                emitMessage(message)
            } catch (error) {
                console.error('Error uploading video:', error);
            }
        }
    };
    
    
  return (
    <>
    <MediaUpload change={handleVideoChange}> 
    
      {({ triggerInput }) => (
      
      <div onClick={triggerInput} className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbVideo}`}>
          <i className="fa fa-video"></i>
      </div>
      
      )}
      
     </MediaUpload> 
    </>
  )
}

export default ChatboxFooterVideoButton