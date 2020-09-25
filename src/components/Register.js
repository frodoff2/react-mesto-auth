import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as Auth from '../Auth.js';

const Register = (props) =>{
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();

  const handleSubmit = e => {
   e.preventDefault();
   Auth.register(email, password)
   .then((res) => {
     if (res){ 
     props.successRegister();
     props.handlePopup();
       history.push('/signin');
     } else{ 
      props.handlePopup();
     }
   })
   .catch(() => {
      console.log("Что-то не так")
     })
  }

return(
  <>
  <form className="main" onSubmit={handleSubmit}> 
  <h1 className="main__title"> Регистрация </h1> 
  <input className="main__input" type="text" placeholder="Email" value={email} onChange={e => setEmail( e.target.value )} /> 
  <span> </span>
  <input className="main__input main__input_margins" type="text" placeholder="Пароль" value={password} onChange={e => setPassword( e.target.value )} />
  <span> </span>
  <button className="main__button" type="submit"> Зарегистрироваться </button>
  <div className="main__caption"> 
      <p> Уже зарегистрированы? </p> 
      <Link to ="/signin" className="main__register"> Войти </Link>
  </div>
  </form>
  </>
  )
}

export default Register;
