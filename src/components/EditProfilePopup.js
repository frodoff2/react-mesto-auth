import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {

  const currentUser = React.useContext(CurrentUserContext);

  // const [value, setValue] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setDescription(e.target.value);

  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
        name: name,
        about: description
      });
}

  return (
    <PopupWithForm name="info" onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose}  title="Редактировать профиль" btnTitle="Сохранить" children={
        <>
        <input type="text" className="popup__input" id='author' name="author" id="popup__name" minLength="2" maxLength="40" required pattern="[A-Za-zА-ЯЁа-яё -]{1,}" defaultValue={name} onChange={handleNameChange}/>  
        <span className="popup__input-error" id="popup__name-error"></span> 
        <input type="text" className="popup__input" name="about" id="popup__info" minLength="2" maxLength="200" required  defaultValue={description} onChange={handleAboutChange}/> 
        <span className="popup__input-error" id="popup__info-error"></span>  
        </>
      }/>
  );
}

export default EditProfilePopup;