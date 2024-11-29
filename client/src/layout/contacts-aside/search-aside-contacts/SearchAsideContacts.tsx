import React from 'react'
import styles from './SearchAsideContacts.module.css' 

const SearchAsideContacts = () => {
    return(
        <div className={styles['user-img']}>
            <img src="Screenshot_20240928-011835.png" alt="Screenshot_20240928-011835.png"/>
        </div>
        <div className={styles['aside-search']}>
            <input type="text" placeholder="Search At Chatssy"/>
            <i className="fa fa-search"></i>
        </div>
    )
}

export default SearchAsideContacts