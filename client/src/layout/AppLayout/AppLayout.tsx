import React from 'react';
import Header from 'src/layout/header/Header';
import ContactsAside from 'src/layout/contacts-aside/ContactsAside';
import styles from './AppLayout.module.css';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header /> 
      <div className={styles.layoutContainer}>
        <div className={styles.layoutAside}>
          <ContactsAside /> 
        </div> 
        <div className={styles.layoutMain}>
          <main>{ children }</main>
        </div> 
      </div>
    </>
  );
};

export default AppLayout;