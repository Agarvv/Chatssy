import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useMessage } from 'src/hooks/useMessage';
import { MediaRecorder } from 'react-media-recorder';
import useImageUpload from 'src/hooks/useImageUpload';

import styles from './ChatboxFooterAudioButton.module.css';
import sharedMediaButtonStyles from '../ChatboxFooter.module.css';

const ChatboxFooterAudioButton: React.FC = () => {
  const { emitMessage } = useMessage();
  
  const chat = useSelector((state: RootState) => state.chat.activeChat);
  
  const [isRecording, setIsRecording] = useState(false);
  
  const [audioFile, setAudioFile] = useState<File | null>(null);
  
  const { imageUrl, uploadImage } = useImageUpload();
    

  const startRecording = () => setIsRecording(true);

  const stopRecording = async (audioBlob: Blob) => {
    setIsRecording(false);
    const file = new File([audioBlob], 'audio_recording.wav', { type: 'audio/wav' });
    setAudioFile(file);
    
        try {
           await uploadImage(file, 'audio');
           console.log('video uploaded successfully!', imageUrl);
          const message = {
             'type': 'audio',
             'value': imageUrl,
             'identifier': chat.id,
             'receiver_id': chat.user_to_display_info.id 
          }
          console.log('Final message object', message)
          emitMessage(message)
          } catch (error) {
           console.error('Error uploading audio:', error);
         }

  };

  return (
    <>
      <div className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbAudio}`}>
        {isRecording ? (
          <>
            <span>Recording...</span>
            <i className="fa fa-stop" onClick={() => audioFile && stopRecording(audioFile)}></i>
          </>
        ) : (
          <i className="fa fa-microphone" onClick={startRecording}></i>
        )}
      </div>
      {audioFile && <audio controls src={URL.createObjectURL(audioFile)} />}
    </>
  );
};

export default ChatboxFooterAudioButton;