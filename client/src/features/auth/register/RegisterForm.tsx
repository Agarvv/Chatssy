import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormValues } from './formTypes';
import { usernameValidation, emailValidation, passwordValidation } from './validators';
import { useRegister } from './useRegister'


const RegisterForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { mutate } = useRegister(); 

  const onSubmit: SubmitHandler<FormValues> = (data) => {
      console.log('data to send', data)
    mutate(data)
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="login-form">
          <h1 className="lf-h1">Welcome To Chatssy!</h1>
          <p className="description">
            Experience seamless communication, elegant design, and unmatched simplicity. A chat app that redefines how you connect.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inp-box">
              <input 
                {...register("username", usernameValidation)} 
                className="name" 
                type="text" 
                placeholder="Username" 
              />
              <i className="fas fa-user icon"></i>
              {errors.username && <p className="error">{errors.username.message}</p>}
            </div>
            <div className="inp-box">
              <input 
                {...register("email", emailValidation)} 
                className="email" 
                type="email" 
                placeholder="Email" 
              />
              <i className="fas fa-envelope icon"></i>
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div className="inp-box">
              <input 
                {...register("password", passwordValidation)} 
                className="password" 
                type="password" 
                placeholder="Secure Password" 
              />
              <i className="fas fa-lock icon"></i>
              {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            <div className="btn-box">
              <button type="submit">Register</button>
            </div>
            <div className="form-links">
              <div>
                <a href="#">Already Have An Account?</a>
              </div>
            </div>
          </form>
          <div className="social-login">
            <p className="social-login-title">Or log in with</p>
            <div className="social-btns">
            
           
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;