import React from 'react'

import Header from 'src/layout/header/Header'
import ContactsAside from 'src/layout/contacts-aside/ContactsAside'
import Chatbox from 'src/features/chatbox/Chatbox'

const HomePage = () => {
    return(
        <>
          <Header />
          
          <div className="main-container">
             <ContactsAside contacts={[]}/> 
             <Chatbox /> 
          </div>
        </>
    )
}

export default HomePage