import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfilePicture.module.css';
import logo from 'src/logo.svg';
import useImageUpload from 'src/hooks/useImageUpload';
import MediaUpload from 'src/layout/media-upload/MediaUpload';
import { useProfile } from 'src/hooks/useProfile'


const ProfilePicture: React.FC<isSelfProps> = ({ isSelf }) => {
    const { imageUrl, uploadImage } = useImageUpload();
    const { setUserPicture } = useProfile()  

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const image = await uploadImage(file, 'image');
                console.log('Image uploaded successfully!', image);
                setUserPicture(image)
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    return (
        <MediaUpload change={handleImageChange}>
            {({ triggerInput }) => (
                <img
                    src={imageUrl || logo}
                    alt="Profile"
                    className={styles.profilePicture}
                    onClick={triggerInput}
                />
            )}
        </MediaUpload>
    );
};

export default ProfilePicture;
