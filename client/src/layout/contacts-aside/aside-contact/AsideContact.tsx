import React from 'react'
import styles from './AsideContact.module.css'
import { UserContact } from 'src/types/chat/UserContact'
import logo from 'src/logo.svg';


interface Props {
    contact: UserContact
}

const AsideContact: React.FC<Props> = ({ contact }) => {
    
    return(
        <div className={styles['aside-chat']}>
            <div className={styles['ac-user']}>
                <img src={logo} alt="ñ"/>
                <div className={styles['ac-content']}>
                    <h4>{ contact.username }</h4>
                    <p>{ contact.lastMessage }</p>
                </div>
            </div>
            <div className={styles['ac-date']}>
                <p>15:13</p>
            </div>
        </div>
    )
}

export default AsideContact