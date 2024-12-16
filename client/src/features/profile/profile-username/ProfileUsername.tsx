import React from 'react'
import { isSelfProps } from '../types'
import styles from './ProfileUsername.module.css'

const ProfileUsername: React.FC<isSelfProps> = ({ isSelf }) => {
  return (
     <>
      <div className={styles['ud-username']}>
          <h4>Juan Pancracio</h4>
      </div>
     </>
  )
}

export default ProfileUsername