import React from 'react';
import styles from './Profile.module.css';
import logo from 'src/logo.svg'
import Profile from 'src/features/profile/UserProfile'
import { useParams } from 'react-router-dom'
import useProfile from 'src/hooks/useProfile'

const UserProfile = () => {
    const { id } = useParams()
    const { profile } = useProfile({ id: Number(id) })

    return (
        <div className={styles.user}>
            <div className={styles.userBanner}>
                <img className={styles.banner} src={logo} alt="banner" />
                <div className={styles.userImg}>
                    <img src={logo} alt="user image" />
                </div>
            </div>

            <div className={styles.userDetails}>
                <div className={styles.userData}>
                    <div className={styles.udUsername}>
                        <h4>Juan Pancracio</h4>
                    </div>
                    <div className={styles.udBio}>
                        <p>Me Gusta el Helado De Fresa</p>
                    </div>
                    <div className={styles.udStatus}>
                        <p>Online</p>
                    </div>
                </div>

                <div className={styles.userActions}>
                    <div className={styles.usChat}>
                        <i className="fa fa-comment"></i>
                    </div>
                    <div className={styles.usVideocall}>
                        <i className="fa fa-video-camera"></i>
                    </div>
                    <div className={styles.usCall}>
                        <i className="fa fa-phone"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;