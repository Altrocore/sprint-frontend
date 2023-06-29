import './login.css'
import rectangle from '../../images/Rectangle.png'
import { useState } from 'react';
import { useMyContext } from '../../Context'
function Login({changeIsLogged}) {

  const loginRegex = /^[a-zA-Z0-9_]{3,20}$/; 
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; 

  const [errors, setErrors] = useState({
    login: '',
    password: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const [form, setForm] = useState({
    login: '',
    password: '',
  });
  const { login, updateContext } = useMyContext();
  const onUpdateField = e => {
    const {name, value} = e.target;
    let error = '';

    if (name === 'login') {
      if(!loginRegex.test(value)) {
        error = 'Login must contain from 3 to 20 characters: letters, numbers or underscores';
      }
    } else if (name === 'password') {
      if (!passwordRegex.test(value)) {
        error = 'Password must contain at least 8 characters, at least one letter and one number';
      }
    }

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error,
    }));

    const nextFormState = {
      ...form,
      [name]: value,
    };
    setForm(nextFormState);

    validateForm();
  };

  const validateForm = () => {
    const { login, password } = form;
    const isLoginValid = loginRegex.test(login);
    const isPasswordValid = passwordRegex.test(password);
    setIsFormValid(isLoginValid && isPasswordValid);
  };

  const saveData = () => {
    updateContext(form.login);
    changeIsLogged(true);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    if (isFormValid) {
      saveData();
    }
  };

  return (
    <div className='main-container'>
      <div className='logo-wrap'>
        <img className='big-logo' alt='company big logo' src={rectangle}/>
      </div>
      <form className='login-form' onSubmit={onSubmitForm}>
        <input onChange={onUpdateField} value={form.login} type='text' name='login' className='login-inp' placeholder='Login'/>
        {errors.login && <span className='error-msg'>{errors.login}</span>}
        <input onChange={onUpdateField} value={form.password} type='password' name='password' className='login-inp' placeholder='Password'/>
        {errors.password && <span className='error-msg'>{errors.password}</span>}
        <button type='submit' className='sign-btn'>Sign in</button>
      </form>
    </div>
  )
}

export default Login;