import React from 'react';
import styles from './ResetPasswordForm.module.css';
import { FormValues } from './types'
import { useForm } from 'react-hook-form';


const ResetPasswordForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['login-form']}>
          <h1>Reset Password</h1>
          <p className={styles.description}>
            Enter your new password and confirm it to complete the reset password process. Then log in back with your new password.
          </p>
          <form action="/reset-password" method="POST">
            <div className={styles['inp-box']}>
              <input type="password" placeholder="New Password" required />
            </div>
            <div className={styles['inp-box']}>
              <input type="password" placeholder="Confirm New Password" required />
            </div>
            <div className={styles['btn-box']}>
              <button type="submit">Reset Password</button>
            </div>
          </form>
          <div className={styles['form-links']}>
            <a href="/login">Go Back To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordForm;