import React from 'react';
import confirm from '../images/Union.svg';
import error from '../images/error.svg';

function InfoToolTip(props) {
  return(
    <section className={(props.isOpen ? 'popup popup_opened' : 'popup')}> 
      <form className="popup__container">
        <button className='popup__close' onClick={props.onClose} type="reset"></button>  
        <img src={( props.success ? confirm : error )} className="infopopup__image" alt="kartinka" /> 
        <h2 className="infopopup__title"> { props.success ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.' } </h2>
      </form>

    </section>
  )
}

export default InfoToolTip;