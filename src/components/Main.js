import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext)

  return(
    <>
    <section className="profile">  
      <img className="profile__image"  src={currentUser.avatar} name="avatar" alt="фотография Жак-Ив Кусто" />  
      <div className="profile__pen" onClick={props.onEditAvatar}> </div> 
      <div className="profile__info">   
        <h1 className="profile__title">{currentUser.name}</h1>  
        <p className="profile__subtitle">{currentUser.about}</p>  
      </div>  
      <button className="profile__edit" type="button" onClick={props.onEditProfile}></button>  
      <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>  
    </section> 
    <section className="elements">
        {props.cards.map((card) =>  <Card key={card._id} card={card} onDeleteButton={props.onDeleteButton} currentUser={currentUser} onClick={props.onCardClick} cardLike={props.cardLike} />)}
    </section> 

   </>
    );
  }
  
  export default Main;