import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileBio.module.css';

const ProfileBio: React.FC<isSelfProps> = ({ isSelf, valueToDisplay }) => {
  const handleBioChange = async () => {
    const bio = prompt('Enter your new bio');
    if (bio !== null) { 
      alert('Your bio has been saved');
    }
  };

  return (
    <>
      <div onClick={handleBioChange} className={styles['ud-bio']}>
        <p>{ valueToDisplay ?? 'BIO not provided'}</p>
      </div>
    </>
  );
};

export default ProfileBio;