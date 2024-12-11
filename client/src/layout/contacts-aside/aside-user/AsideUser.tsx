import React from 'react'
import sharedContactStyles from '../aside-contact/AsideContact.module.css'

const AsideUser: React.FC = () => {
    return(
      <div className={`${sharedContactStyles.user} ${sharedContactStyles['aside-chat']}`}>
        <div className={sharedContactStyles['ac-user']}>
          <img src="Screenshot_20240928-011835.png" alt="ñ" />
          <div className={sharedContactStyles['ac-content']}>
            <h4>Elver Galarga</h4>
            <p>Te hecho de m...</p>
          </div>
        </div>
      </div>
    )
}

export default AsideUser