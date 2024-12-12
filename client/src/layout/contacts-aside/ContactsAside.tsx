import { React, useEffect } from 'react'

import type { UserContact } from "src/types/chat/UserContact"
import AsideContact from './aside-contact/AsideContact'
import SearchAsideContacts from './search-aside-contacts/SearchAsideContacts'
import AsideGroup from './aside-group/AsideGroup'
import AsideUser from './aside-user/AsideUser'
import styles from './ContactsAside.module.css'
import useContacts  from 'src/hooks/useContacts'


// This aside shows user contacts 
const ContactsAside = () => {
    const { contacts } = useContacts()
    
    return (
        <aside className={styles.aside}> 
            <div className={styles['aside-h']}> 
                {/* Search User Contacts */}
                <SearchAsideContacts />
            </div>
            {/* Contact list */}
            <div className={styles.asideContent}> 
                {/* Chat Contacts */}
                <div className={styles['aside-chats']}>
                    <span>Your Chats</span>
                  { /*  {contacts.map((contact) => (
                        <AsideContact key={contact.id} contact={contact} />
                    ))}  */ }
                </div>
                {/* Group Contacts */}
                <div className={styles.asideGroups}>
                    <span>Groups</span>
                    <AsideGroup />
                </div>

                {/* Aside Users May Like */}
                <div className={styles.asideUsers}>
                    <span>¡Meet Them!</span>
                    <AsideUser />
                </div>
            </div> 
        </aside>
    )
}

export default ContactsAside