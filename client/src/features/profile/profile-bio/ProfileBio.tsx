import React from 'react'
import { isSelfProps } from '../types'
import styles from './ProfileBio.module.css'

const ProfileBio: React.FC<isSelfProps> = ({ isSelf }) => {
    handleBioChange() {
        // just some kind of basic modal 
        const bio = prompt('Enter your new bio')
        alert('Your bio has been sabed')
    }
  return (
    <>
     <div onClick={handleBioChange} className={styles['ud-bio']}>
        <p>Me Gusta el Helado De Fresa</p>
     </div>
    </> 
  )
}

export default ProfileBio