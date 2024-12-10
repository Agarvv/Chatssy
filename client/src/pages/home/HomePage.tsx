import React from 'react'

import Header from 'src/layout/header/Header'
import ContactsAside from 'src/layout/contacts-aside/ContactsAside'
import Chatbox from 'src/features/chatbox/Chatbox'
import styles from './HomePage.module.css'

const HomePage = () => {
    return(
        <>
          <Header />
          
          <div className={styles.mainContainer}>
                <ContactsAside contacts={[]}/> 

                 <Chatbox /> 
          </div>
        </>
    )
}

export default HomePage