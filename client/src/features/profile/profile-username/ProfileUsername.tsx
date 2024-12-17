import React, { useState } from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileUsername.module.css';

const ProfileUsername: React.FC<isSelfProps> = ({ isSelf }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [username, setUsername] = useState('Juan Pancracio');

  return (
    <>
      <div className={styles['ud-username']}>
       <p>Userame</p>
      </div>
    </>
  );
};

export default ProfileUsername;