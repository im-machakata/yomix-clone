import { useState } from 'react';
import Style from './Login.css'
import Header from '../../components/LoginHeader.js'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isBtnEnabled = () => {
    return username.length > 1 && password.length > 1;
  }
  const btnClasses = () => {
    return isBtnEnabled() ? '' : 'disabled';
  }
  return (
    <div className='application'>
      <Header></Header>
      <section className='login-container'>
        <div className='text-input'>
          <div className='input-image'></div>
          <input type='text' placeholder='Username' onChange={value => { setUsername(value) }} />
        </div>
        <div className='text-input'>
          <div className='input-image'></div>
          <input type='text' placeholder='Password' onChange={value => { setPassword(value) }} />
          <a href='/' className='nav-item'>Forgot?</a>
        </div>
        <button className={btnClasses()}>Login</button>
        <div className='additional-info'>
          <div><a href='/'>Yomix Verification Code to Login</a></div>
          <div>New User? <a href='/' className='color-primary'>Sign Up Now</a></div>
        </div>
      </section>
      <footer className='login-footer'>
        Econet Wireless Zimbabwe
      </footer>
    </div>
  );
}

export default Login;
