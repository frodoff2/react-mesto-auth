import React from 'react';
import headerLogo from '../images/logo.svg';
import { Route, NavLink } from 'react-router-dom';

function Header(props) {
  return(
    <header className="header">  
      <img src={headerLogo} className="header__logo" alt="логотип" />  

    <Route exact path="/signin">
      <NavLink className="header__nav" to="/signup"> Регистрация </NavLink>
    </Route>

    <Route exact path="/signup">
      <NavLink className="header__nav" to="/signin"> Войти </NavLink>
    </Route>

    <Route exact path="/">
      <p className="header__info"> {props.userData} </p>
      <button className="header__button" type='button' onClick={props.signOut}> Выйти </button>
    </Route>

    </header>  
  );
}

export default Header;