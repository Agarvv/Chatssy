import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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
    <div className="container">
      <div className="wrapper">
        <div className="login-form">
          <h1 className="lf-h1">Welcome Back To Chatssy!</h1>
          <p className="description">
            Experience seamless communication, elegant design, and unmatched simplicity. A chat app that redefines how you connect.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inp-box">
              <input
                className="email"
                type="email"
                placeholder="Email"
                {...register('email', emailValidation)}
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
              <i className="fas fa-envelope icon"></i>
            </div>
            <div className="inp-box">
              <input
                className="password"
                type="password"
                placeholder="Your Password"
                {...register('password', passwordValidation)}
              />
              {errors.password && <span className="error">{errors.password.message}</span>}
              <i className="fas fa-lock icon"></i>
            </div>
            <div className="btn-box">
              <button type="submit">Login</button>
            </div>
            <div className="form-links">
              <div>
                <a href="#">Forgot Password</a>
              </div>
              <div>
                <a href="#">Don't Have An Account</a>
              </div>
            </div>
          </form>
          <div className="social-login">
            <p className="social-login-title">Or log in with</p>
            <div className="social-btns">
              <button className="social-btn facebook">
                <i className="fab fa-facebook-f"></i> Facebook
              </button>
              <button className="social-btn google">
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