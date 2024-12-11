import React from 'react'

import sharedContactStyles from '../aside-contact/AsideContact.module.css'

const AsideGroup: React.FC = () => {
    return(
      <div className={`${sharedContactStyles.group} ${sharedContactStyles['aside-chat']}`}>
        <div className={sharedContactStyles['ac-user']}>
          <img src="Screenshot_20240928-011835.png" alt="ñ" />
          <div className={sharedContactStyles['ac-content']}>
            <h4>Los Papus :P</h4>
            <p>Siii</p>
          </div>
        </div>
      </div>
    )
}

export default AsideGroup