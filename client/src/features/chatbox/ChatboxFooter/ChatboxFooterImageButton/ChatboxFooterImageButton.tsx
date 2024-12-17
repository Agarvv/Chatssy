import React from 'react'
import styles from './ChatboxFooterImageButton.module.css'
import sharedMediaButtonStyles from '../ChatboxFooter.module.css'
import MediaUpload from 'src/layout/media-upload/MediaUpload';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useMessage } from 'src/hooks/useMessage'
import useImageUpload from 'src/hooks/useImageUpload';

const ChatboxFooterImageButton = () => {
    const { emitMessage } = useMessage() 
    const chat = useSelector((state: RootState) => state.chat.activeChat);
    const { imageUrl, uploadImage } = useImageUpload();
    
    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                await uploadImage(file, 'image');
                console.log('Image uploaded successfully!', imageUrl);
                const message = {
                  'type': 'image',
                  'value': imageUrl,
                  'identifier': chat?.id,
                  'receiver_id': chat?.user_to_display_info.id 
                }
                console.log('Final message object', message)
                emitMessage(message)
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };
    
    
  return (
    <>
    <MediaUpload change={handleImageChange}> 
      {({ triggerInput }) => (
         <div onClick={triggerInput} className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbImage}`}>
             <i className="fa fa-image"></i>
         </div>
      )}
     </MediaUpload> 
    </>
  )
}

export default ChatboxFooterImageButton