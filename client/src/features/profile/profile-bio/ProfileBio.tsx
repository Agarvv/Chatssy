import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileBio.module.css';
import { useProfile } from 'src/hooks/useProfile'


const ProfileBio: React.FC<isSelfProps> = ({ isSelf, valueToDisplay }) => {
  const { setUserBio } = useProfile() 
  
  const handleBioChange = async () => {
      // some kind of basic modal
    const bio = prompt('Enter your new bio');
    if (bio !== null) { 
       setUserBio(bio)
    } else {
        alert('Please Provide a BIO.')
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