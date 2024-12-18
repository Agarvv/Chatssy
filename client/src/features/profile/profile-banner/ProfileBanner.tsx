import React from 'react';
import { isSelfProps } from '../types';
import styles from './ProfileBanner.module.css';
import logo from 'src/logo.svg';
import MediaUpload from 'src/layout/media-upload/MediaUpload';
import useImageUpload from 'src/hooks/useImageUpload';
import useSetProfileBanner from 'src/hooks/useSetProfileBanner'


const ProfileBanner: React.FC<isSelfProps> = ({ isSelf, valueToDisplay }) => {
    const { imageUrl, uploadImage } = useImageUpload();
    const { mutate } = useSetProfileBanner()  

    const handleBannerChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const image = await uploadImage(file, 'image');
                console.log('Banner uploaded successfully!', image);
                mutate(image)
            } catch (error) {
                console.error('Error uploading banner:', error);
            }
        }
    };

    return (
        <MediaUpload change={handleBannerChange}>
            {({ triggerInput }) => (
                <img
                    className={styles.banner}
                    src={
                    valueToDisplay|| logo}
                    alt="banner"
                    onClick={triggerInput}
                />
            )}
        </MediaUpload>
    );
};

export default ProfileBanner;
