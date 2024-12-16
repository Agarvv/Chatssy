import React, { useState } from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileUsername.module.css';

const ProfileUsername: React.FC<isSelfProps> = ({ isSelf }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempUsername, setTempUsername] = useState('Juan Pancracio');
  const [username, setUsername] = useState('Juan Pancracio');

  const handleUsernameClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setTempUsername(username);
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setUsername(tempUsername);
    setIsEditing(false);
  };

  const handleInputChange = (e: React.FormEvent<HTMLDivElement>) => {
    setTempUsername(e.currentTarget.textContent || username);
  };

  return (
    <>
      <div className={styles['ud-username']}>
        <h4
          contentEditable={isEditing}
          suppressContentEditableWarning
          onClick={handleUsernameClick}
          onInput={handleInputChange}
          onBlur={handleBlur}
          className={isEditing ? styles.editing : ''}
        >
          {tempUsername}
        </h4>
        <button
          onClick={handleSaveClick}
          className={styles['save-button']}
          style={{ display: isEditing ? 'inline-block' : 'none' }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default ProfileUsername;