import React from 'react';

function PopupWithForm(props) {
  return(
    <>
      <section className={`popup popup_opacity-normal popup_type_${props.name} ${props.isOpen ? ('popup_opened') : ('')} ` } >  
        <form className={`popup__container popup__container_${props.avatar}`} name="form" id="form-info" onSubmit={props.onSubmit}>  
          <button className={'popup__close'} onClick={props.onClose} type="reset"></button>  
          <h2 className="popup__title">{props.title}</h2>  
           {props.children}
          <button className="popup__button popup__button_active " type="submit" id="button-info" >{props.btnTitle}</button>  
        </form>  
      </section>  
    </>
  )
}
  
export default PopupWithForm;
    
