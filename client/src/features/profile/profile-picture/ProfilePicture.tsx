import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfilePicture.module.css';
import logo from 'src/logo.svg';
import useImageUpload from 'src/hooks/useImageUpload';

const ProfilePicture: React.FC<isSelfProps> = ({ isSelf }) => {
    const { imageUrl, uploadImage } = useImageUpload();

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
           try {
            uploadImage(file);
            console.log('uploaded image sucesfully!', imageUrl)
           } catch(e: any) {
             console.error('Error uploading image:', e);
             return;
           }
        }
    };

    const triggerInput = () => {
        const inputElement = document.querySelector('input[type="file"]');
        if (inputElement instanceof HTMLInputElement) { 
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
            />
        </>
    );
};

export default ProfilePicture;