import React from 'react'
import styles from './AsideContact.module.css'
import { Chat } from 'src/types/chat/Chat';
import logo from 'src/logo.svg';


interface Props {
    contact: Chat
}

const AsideContact: React.FC<Props> = ({ contact }) => {
    
    return(
        <div className={styles['aside-chat']}>
            <div className={styles['ac-user']}>
                <img src={logo} alt="ñ"/>
                <div className={styles['ac-content']}>
                    <h4>{ contact.user_to_display_info.username }</h4>
                    <p>{ contact.messages[contact.messages.length - 1] }</p>
                </div>
            </div>
            <div className={styles['ac-date']}>
                <p>15:13</p>
            </div>
        </div>
    )
}

export default AsideContact