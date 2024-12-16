import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfilePicture.module.css';
import logo from 'src/logo.svg';
import useImageUpload from 'src/hooks/useImageUpload';

const ProfilePicture: React.FC<isSelfProps> = ({ isSelf }) => {
    const { imageUrl, uploadImage } = useImageUpload();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            uploadImage(file);
        }
    };

    const triggerInput = () => {
        const inputElement = document.querySelector('input[type="file"]');
        if (inputElement) {
            inputElement.click();
        }
    };

    return (
        <>
            <img 
                src={imageUrl || logo} 
                alt="user image" 
                className={styles.profilePicture}
                onClick={triggerInput} 
            />
            <input 
                type="file" 
                onChange={handleImageChange} 
                style={{ display: 'none' }} 
            />
        </>
    );
};

export default ProfilePicture;