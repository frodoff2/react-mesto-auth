import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Auth from '../Auth.js';


const  Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

const handleSubmit = (e) => {
   e.preventDefault();
    Auth.login(email, password)
    .then((data) => {
      if(data.token) {
        setEmail('')
        setPassword('')
        props.handleLogin();
        history.push('/');
      } else { 
        return;
      }
    })
    .catch(err => console.log(err));
  }
return(
  <>
  <form onSubmit={handleSubmit} className="main"> 
    <h1 className="main__title"> Вход </h1> 
    <input className="main__input" type="text" placeholder="Email" value={email} onChange={e => setEmail( e.target.value )} /> 
    <span> </span>
    <input className="main__input main__input_margins" type="text" placeholder="Пароль" value={password} onChange={e => setPassword( e.target.value )}/>
    <span> </span>
    <button className="main__button" type="submit"> Войти </button>
    <div className="main__caption"> 
      <p> Еще не зарегистрированы? </p> 
      <Link to ="/signup" className="main__register"> Регистрация</Link>
    </div>
  </form>
  </>
  );
}

 export default Login;