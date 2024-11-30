import styles from './SendResetPasswordUrlForm.module.css';
import { FormValues } from './types'
import { useForm } from 'react-hook-form';
import { emailValidation } from 'src/outils/form-validators';
import { useSubmit } from 'src/hooks/useSubmit';

const SendResetPasswordUrlForm: React.FC = () => {
    
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  
  const { mutate } = useSubmit({
      url: '/send-reset-url',
      successMessage: 'Check Your Email.',
      errorMessage: 'Could not send email...'
  });
  
  const onSubmit = (data: FormValues) => {
      mutate(data); 
  };
  
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['login-form']}>
          <h1>Reset Password</h1>
          <p className={styles.description}>
            Enter your email and we will send you the instructions to reset your password.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles['inp-box']}>
              <input
                type="email"
                placeholder="Email"
                required
                {...register("email", emailValidation)} {/* Aquí pasas las validaciones correctamente */}
              />
              {errors.email && <small className="formError">{errors.email.message}</small>}
            </div>
            <div className={styles['btn-box']}>
              <button type="submit">Send</button>
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

export default SendResetPasswordUrlForm;