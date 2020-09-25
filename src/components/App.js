import React from 'react';
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Header from './Header.js';
import Login from './Login.js';
import Register from './Register.js';
import InfoToolTip from './InfoToolTip.js';
import ProtectedRoute from './ProtectedRoute.js';
import Elements from './Elements.js';
import * as Auth from '../Auth.js';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState('');
  const [isInfoToolOpen, setIsInfoToolOpen] = React.useState(false);
  const [successRegister, setSuccessRegister] = React.useState(false);

  const history = useHistory();

  function handleInfoToolPopup() {
    setIsInfoToolOpen(true);
  }

  function handleSuccessRegister() {
    setSuccessRegister(true);
  }

  function handleLogin() {
    setLoggedIn(true);
  }

  function closePopup() {
    setIsInfoToolOpen(false)
  }

  function tokenCheck() {
    if (localStorage.getItem('jwt')) {
      let jwt = localStorage.getItem('jwt');
      Auth.getContent(jwt)
        .then((res) => {
          if (res.data) {
            setLoggedIn(true); 
            setUserData(res.data.email); 
            history.push('/');
          }
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

   React.useEffect(() => {
    tokenCheck();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]) 


  function signOut() {
    localStorage.removeItem('jwt');
    history.push('/signin')
    setLoggedIn(false);
     setUserData('');
  }

  return (

      <div className="App">
        <div className="page">  

          <Header signOut={signOut} userData={userData}/>

          <InfoToolTip isOpen={isInfoToolOpen} success={successRegister} onClose={closePopup} > </InfoToolTip>
  
          <Switch>

            <ProtectedRoute exact path="/" loggedIn={loggedIn} component={Elements} />

            <Route  path="/signup"> <Register handlePopup={handleInfoToolPopup} successRegister={handleSuccessRegister} />  </Route>

            <Route  path="/signin"> <Login handleLogin={handleLogin} tokenCheck={tokenCheck}/>  </Route>

            <Route> {loggedIn ? <Redirect to="/" /> : <Redirect to='/signin' />} </Route>
            

            </Switch>


      </div>  
    </div>

  );

}

export default App;