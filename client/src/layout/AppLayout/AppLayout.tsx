import React from 'react'
import Header from 'src/layout/header/Header'
import ContactsAside from 'src/layout/contacts-aside/ContactsAside'
import { AppRoutes } from 'src/routes';
import styles from './AppLayout.module.css'

const AppLayout = () => {
    return(
      <>
      <Header /> 
      <div className={styles.layoutContainer}>
       <div className={styles.layoutAside}>
        <ContactsAside /> 
       </div> 
       <div className={styles.layoutMain}>
        <AppRoutes /> 
       </div> 
      </div>
      </>
    )
}