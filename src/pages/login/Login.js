// components import
import Header from '../../components/LoginHeader.js'

function Login() {
  return (
    <div className='application'>
      <Header></Header>
      <section className='login-container'>
        <div className='text-input'>
          <div className='input-image'></div>
          <input type='text' placeholder='Username' />
        </div>
        <div className='text-input'>
          <div className='input-image'></div>
          <input type='text' placeholder='Password' />
          <a>Forgot?</a>
        </div>
        <button className='button'>Login</button>
      </section>
      <footer></footer>
    </div>
  );
}

export default Login;
