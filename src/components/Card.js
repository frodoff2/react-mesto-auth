import React from 'react';

function Card(props) {
  // увеличенная картинка
  function handleClick() {
    props.onClick(props.card)
  }
  // лайк
  function handleLikeClick() {
    props.cardLike(props.card)
  }
  // удаление карточки
  function handleCardDelete() {
    props.onDeleteButton(props.card)
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === props.currentUser._id;
  const cardDeleteButtonClassName = (
    `element__trash ${isOwn ? '' : 'element__trash_active'}`
  );
  // Определяем лайки
  const isLiked = props.card.likes.some(i => i._id === props.currentUser._id);
  const cardLikeButtonClassName = (`element__like ${isLiked ? 'element__like_active' : ''}`);

  return( 
    <div className="element">    
      <img className="element__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />    
      <button className={cardDeleteButtonClassName} type="button" onClick={handleCardDelete}></button>   
      <div className="element__text">   
        <h2 className="element__title">{props.card.name}</h2>   
        <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button"></button>   
        <div className="element__like_count">{props.card.likes.length}</div>  
      </div>   
    </div>   
  ); 
} 
export default Card;