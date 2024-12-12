import React from 'react';
import sharedContactStyles from '../aside-contact/AsideContact.module.css';
import logo from 'src/logo.svg';
import useNewChat from 'src/hooks/useNewChat';

const AsideUser: React.FC = () => {

    const { mutate } = useNewChat({ userId: 1 });// dummy data

    const handleCreateChat = () => {
        mutate({ userId: 1 }); 
    };

    return (
        <div onClick={handleCreateChat} className={`${sharedContactStyles.user} ${sharedContactStyles['aside-chat']}`}>
            <div className={sharedContactStyles['ac-user']}>
                <img src={logo} alt="ñ" />
                <div className={sharedContactStyles['ac-content']}>
                    <h4>Elver Galarga</h4>
                    <p>Te hecho de m...</p>
                </div>
            </div>
        </div>
    );
};

export default AsideUser;