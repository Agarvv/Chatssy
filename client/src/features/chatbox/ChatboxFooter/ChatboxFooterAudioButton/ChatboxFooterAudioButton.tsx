import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useMessage } from 'src/hooks/useMessage';

import styles from './ChatboxFooterAudioButton.module.css';
import sharedMediaButtonStyles from '../ChatboxFooter.module.css';
import useImageUpload from 'src/hooks/useImageUpload';

const ChatboxFooterAudioButton: React.FC = () => {
  const { emitMessage } = useMessage();
  const chat = useSelector((state: RootState) => state.chat.activeChat);
  const [isRecording, setIsRecording] = useState(false);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const { imageUrl, uploadImage } = useImageUpload();

  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: Blob[] = [];

  const startRecording = async () => {
    setIsRecording(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder = new MediaRecorder(stream);

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          audioChunks.push(e.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const file = new File([audioBlob], 'audio_recording.wav', { type: 'audio/wav' });
        setAudioFile(file);

        if (file) {  
          try {
            await uploadImage(file, 'audio'); 
            console.log('audio uploaded successfully!', imageUrl);
            const message = {
              type: 'audio',
              value: imageUrl,
              identifier: chat?.id,
              receiver_id: chat?.user_to_display_info.id 
            };
            console.log('Final message object', message);
            emitMessage(message);
          } catch (error) {
            console.error('Error uploading video:', error);
          }
        }

        audioChunks = [];
      };

      mediaRecorder.start();
    } catch (err) {
      console.error(err);
    }
  };

  const stopRecording = () => {
  if (mediaRecorder) {
    console.log(`MediaRecorder state: ${mediaRecorder.state}`);
    if (mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
    } else {
      alert('could not stop audio');
    }
  } else {
    alert('no audio recorder.');
  }
};
  
  return (
    <>
      <div className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbAudio}`}>
        {isRecording ? (
          <>
            <i className="fa fa-square" onClick={stopRecording}></i>
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