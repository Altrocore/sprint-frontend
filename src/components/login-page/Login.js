import './login.css'
import rectangle from '../../images/Rectangle.png'
import { useState } from 'react';

function Login({setLogin}) {

  const [form, setForm] = useState({
    login: '',
    password: '',
    isSaved: false
  });

  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const saveData = () => {
    //saving userdata to session storage
    const nextFormState = {
      ...form,
      isSaved: true,
    };
    setForm(nextFormState);
    for (let key in form) {
      sessionStorage.setItem(key, form[key]);
    }
    let value = sessionStorage.getItem('login');
    setLogin(value)
    console.log(value)
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