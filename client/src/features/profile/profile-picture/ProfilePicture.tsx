import React from 'react'
import { isSelfProps } from '../types'
import styles from './ProfilePicture.module.css'
import logo from 'src/logo.svg';

const ProfilePicture: React.FC<isSelfProps> = ({ isSelf }) => {
  return (
      <>
        <img src={logo} alt="user image" />
      </>
  )
}

export default ProfilePicture