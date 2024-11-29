import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './LoginForm.module.css';
import { FormValues } from './formTypes';
import { emailValidation, passwordValidation } from './validators';
import { useLogin } from './useLogin';

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { mutate } = useLogin();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('data to send', data);
    mutate(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['login-form']}>
          <h1 className={styles['lf-h1']}>Welcome Back To Chatssy!</h1>
          <p className={styles.description}>
            Experience seamless communication, elegant design, and unmatched simplicity. A chat app that redefines how you connect.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['inp-box']}>
              <input
                className={styles.email}
                type="email"
                placeholder="Email"
                {...register('email', emailValidation)}
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
              <i className="fas fa-envelope icon"></i>
            </div>
            <div className={styles['inp-box']}>
              <input
                className={styles.password}
                type="password"
                placeholder="Your Password"
                {...register('password', passwordValidation)}
              />
              {errors.password && <span className={styles.error}>{errors.password.message}</span>}
              <i className="fas fa-lock icon"></i>
            </div>
            <div className={styles['btn-box']}>
              <button type="submit">Login</button>
            </div>
            <div className={styles['form-links']}>
              <div>
                <a href="#">Forgot Password</a>
              </div>
              <div>
                <a href="#">Don't Have An Account</a>
              </div>
            </div>
          </form>
          <div className={styles['social-login']}>
            <p className={styles['social-login-title']}>Or log in with</p>
            <div className={styles['social-btns']}>
              <button className={`${styles['social-btn']} ${styles.facebook}`}>
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
              <button className={`${styles['social-btn']} ${styles.google}`}>
                <i className="fab fa-google"></i> Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;