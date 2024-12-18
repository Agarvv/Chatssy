import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfilePicture.module.css';
import logo from 'src/logo.svg';
import useImageUpload from 'src/hooks/useImageUpload';
import useSetProfilePicture from 'src/hooks/useSetProfilePicture';

const ProfilePicture: React.FC<isSelfProps> = ({ isSelf, valueToDisplay }) => {
    const { imageUrl, uploadImage } = useImageUpload();
    const { mutate } = useSetProfilePicture();  

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const image = await uploadImage(file, 'image');
                console.log('Image uploaded successfully!', image);
                mutate(image); 
            } catch (error) {
                console.error('Error uploading image:', error);
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
            {/* <MediaUpload change={handleImageChange}>
                {({ triggerInput }) => ( */}
            <input
                type="file"
                onChange={handleImageChange}
                style={{ display: 'none' }}
            />
            <img
                src={logo}
                alt="Profile"
                className={styles.rofilePicture}
                onClick={triggerInput}
            />
           {/* )}
        </MediaUpload> */}
        </>
    );
};

export default ProfilePicture;