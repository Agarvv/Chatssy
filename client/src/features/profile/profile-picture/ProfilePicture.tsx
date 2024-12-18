import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfilePicture.module.css';
import logo from 'src/logo.svg';
import useImageUpload from 'src/hooks/useImageUpload';
import MediaUpload from 'src/layout/media-upload/MediaUpload';
import useSetProfilePicture from 'src/hooks/useSetProfilePicture'


const ProfilePicture: React.FC<isSelfProps> = ({ isSelf }) => {
    const { imageUrl, uploadImage } = useImageUpload();
    const { mutate } = useSetProfilePicture()  

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const image = await uploadImage(file, 'image');
                console.log('Image uploaded successfully!', image);
                mutate(image)
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
