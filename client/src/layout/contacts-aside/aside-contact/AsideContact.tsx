import React from 'react'
import styles from './AsideContact.module.css'
import { UserContact } from 'src/types/chat/UserContact'


interface Props {
    contact: UserContact
}

const AsideContact: React.FC<Props> = ({ contact }) => {
    
    return(
        <div className={styles['aside-chat']}>
            <div className={styles['ac-user']}>
                <img src="Screenshot_20240928-011835.png" alt="ñ"/>
                <div className={styles['ac-content']}>
                    <h4>{{ contact.username }}</h4>
                    <p>{{ contact.lastMessage }}</p>
                </div>
            </div>
            <div className={styles['ac-date']}>
                <p>15:13</p>
            </div>
        </div>
    )
}

export default AsideContact