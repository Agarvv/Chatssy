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

  let mediaRecorder: MediaRecorder | null = null;
  let audioChunks: Blob[] = [];

  const startRecording = () => {
    setIsRecording(true);

    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        mediaRecorder = new MediaRecorder(stream);

        mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunks.push(e.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const file = new File([audioBlob], 'audio_recording.wav', { type: 'audio/wav' });
          setAudioFile(file);
          try { 
                await uploadImage(audioFile, 'audio');
                console.log('audio uploaded successfully!', imageUrl);
                const message = {
                  'type': 'audio',
                  'value': imageUrl,
                  'identifier': chat?.id,
                  'receiver_id': chat?.user_to_display_info.id 
                }
                console.log('Final message object', message)
                emitMessage(message)
            } catch (error) {
                console.error('Error uploading video:', error);
            }
          
          
          audioChunks = [];
        };

        mediaRecorder.start();
      })
      .catch(err => console.error(err));
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <>
      <div className={`${sharedMediaButtonStyles.fMediaButton} ${styles.fmbAudio}`}>
        {isRecording ? (
          <>
            <span>Recording...</span>
            <i className="fa fa-stop" onClick={stopRecording}></i>
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