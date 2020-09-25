import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {

  const counterRef = React.useRef(); // используем реф

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: counterRef.current.value
    });
  }

  return(
    <PopupWithForm name="avatar" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit} title="Обновить аватар" btnTitle="Сохранить" avatar="avatar" children={
        <>
        <input type="url" className="popup__input" name="avatar" id="avatar__url" ref={counterRef} required /> 
        <span className ="popup__input-error" id="avatar__url-error"> </span> 
        </>
      }/>
  );
}

export default EditAvatarPopup;
