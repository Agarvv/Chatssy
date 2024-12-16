import React, { useState } from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileUsername.module.css';

const ProfileUsername: React.FC<isSelfProps> = ({ isSelf }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [username, setUsername] = useState('Juan Pancracio');

  const handleUsernameClick = () => {
    if (isSelf) {
      setIsEditing(true);
    }
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
       <p>Userame</p>
      </div>
    </>
  );
};

export default ProfileUsername;