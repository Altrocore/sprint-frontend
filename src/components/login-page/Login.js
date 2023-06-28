import './login.css'
import rectangle from '../../images/Rectangle.png'
import { useState } from 'react';
import { useMyContext } from '../../Context'
function Login({changeIsLogged}) {

  const [form, setForm] = useState({
    login: '',
    password: '',
  });
  const { login, updateContext } = useMyContext();
  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const saveData = () => {
    updateContext(form.login);
    changeIsLogged(true);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    saveData();
  };

  return (
    <div className='main-container'>
      <div className='logo-wrap'>
        <img className='big-logo' alt='company big logo' src={rectangle}/>
      </div>
      <form className='login-form' onSubmit={onSubmitForm}>
        <input onChange={onUpdateField} value={form.login} type='text' name='login' className='login-inp' placeholder='Login'/>
        <input onChange={onUpdateField} value={form.password} type='password' name='password' className='login-inp' placeholder='Password'/>
        <button type='submit' className='sign-btn'>Sign in</button>
      </form>
    </div>
  )
}

export default Login;