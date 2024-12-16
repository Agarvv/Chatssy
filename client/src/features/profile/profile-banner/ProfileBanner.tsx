import React from 'react'
import { isSelfProps } from '../types'
import styles from './ProfileBanner.module.css'
import logo from 'src/logo.svg';

const ProfileBanner: React.FC<isSelfProps> = ({ isSelf }) => {
  return (
    <>
    <img className={styles.banner} src={logo} alt="banner" />
    </> 
  )
}

export default ProfileBanner