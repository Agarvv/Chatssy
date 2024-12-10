import React from 'react'

import type { UserContact } from "src/types/chat/UserContact"
import  AsideContact  from './aside-contact/AsideContact'
import SearchAsideContacts from './search-aside-contacts/SearchAsideContacts'
import styles from './ContactsAside.module.css'


interface Props {
    contacts: UserContact[] | []
}

// This aside shows user contacts 
const ContactsAside: React.FC<Props> = ({ contacts }) => {
    return (
        <aside className={styles.aside}> 
            <div className={styles['aside-h']}> 
                {/* Search User Contacts */}
                <SearchAsideContacts />
            </div>
            {/* Contact list */}
            <div className={styles['aside-chats']}>
                {contacts.map((contact) => (
                    <AsideContact key={contact.id} contact={contact} />
                ))}
            </div>
        </aside>
    )
}

export default ContactsAside