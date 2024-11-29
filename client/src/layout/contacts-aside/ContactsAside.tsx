import React from 'react'

import { UserContact } from '@types/UserContact'
import { AsideContant } from './aside-contact/AsideContact'
import { SearchAsideContacts } from './search-aside-contacts/SearchAsideContacts'
import styles from './ContactsAside.module.css' 

interface Props {
    contacts: UserContact[] 
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
                    <AsideContant key={contact.id} contact={contact} />
                ))}
            </div>
        </aside>
    )
}

export default ContactsAside