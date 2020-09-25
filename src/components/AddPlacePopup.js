import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {

  const title = React.useRef(); // используем реф
  const url = React.useRef();

  function handleSubmit(e) {
    e.preventDefault(); 
    props.onAddPlace({
        name: title.current.value,
        link: url.current.value
    });
  }
  return(
    <PopupWithForm name="locations" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Новое место" btnTitle="Создать" children={
        <>
       <input type="text" className="popup__input" name="name" placeholder="Название" id="cards__name" minLength="1" maxLength="30" ref={title} required  />  
       <span className="popup__input-error" id="cards__name-error"></span> 
       <input type="url" className="popup__input" name="link" placeholder="Ссылка на картинку" id="cards__info" ref={url} required /> 
       <span className="popup__input-error" id="cards__info-error"></span>  
        </>
      }/>
  );
}

export default AddPlacePopup;