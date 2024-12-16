import React from 'react'
import { isSelfProps } from '../types'
import styles from './ProfileBio.module.css'

const ProfileBio: React.FC<isSelfProps> = ({ isSelf }) => {
  return (
    <>
     <div className={styles['ud-bio']}>
        <p>Me Gusta el Helado De Fresa</p>
     </div>
    </> 
  )
}

export default ProfileBio