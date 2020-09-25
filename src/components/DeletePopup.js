import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeletePopup(props) {

  function handleDelete(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return(
    <PopupWithForm name="trash" isOpen={props.isOpen} onClose={props.onClose} 
    title="Вы уверены?" avatar="delete" btnTitle="Да" onSubmit={handleDelete}/>
  );
}

export default DeletePopup;