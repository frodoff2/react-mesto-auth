import React from 'react';

function ImapePopup(props) {
  return(
    <section className={`popup popup_opacity  ${props.isOpen ? ('popup_opened') : ('')} `} >  
      <div className="popup__zoomed">  
        <button className="popup__close popup__close-zoom" type="button" onClick={props.onClose}></button>  
          <img className="popup__image" src={props.card.link} alt={props.card.name}/>  
          <p className="popup__caption">{props.card.name}</p>  
      </div>  
    </section> 
    )  
  }

export default ImapePopup;

