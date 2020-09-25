import React from 'react';
import Main from './Main.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import DeletePopup from './DeletePopup.js';
import Footer from './Footer.js';
import api from '../utils/API.js';

function Elements() {
    const [currentUser, setCurrentUser] = React.useState([]);
    const [cards, setCards] = React.useState([]);
    const [deleteCard, setDeleteCard] = React.useState([])

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isDeletePopupOpen, setDeletePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);
    const [bigPopup, setBigPopup] = React.useState([]);
  
        // получаем информацию о пользователе
  React.useEffect(() => {
    api.getInfo().then(res => {
      setCurrentUser(res)
      })
      .catch(err => { 
        console.log(err)  
      }) 
    }, [])
    
    
  // получаем карточки от сервера
  React.useEffect(() => {
    api.getInitialCards().then(data => {
      setCards(data); 
    })
    .catch(err => { 
      console.log(err)  
    }) 
  }, []);
    
    // функция для лайков и дизлайков карточки
  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
     api.changeLikeCardStatus(`${card._id}`, isLiked)
      .then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    });
  } 
    // функция для удаления карточки
  function handleCardDeleteSubmit() {
    api.deleteCard(deleteCard._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== deleteCard._id);
        setCards(newCards);
        closeAllPopups();
      });
    }
  // изменяем информацию о пользователи 
  function handleUpdateUser({name, about}) {
    api.editProfile(name, about) 
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
    }
  // изменяем аватар
  function handleUpdateAvatar({avatar}) {
    api.changeAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
  }
    // открываем увеличенную карточку
    function handleCardClick(props) {
      setSelectedCard(true);
      setBigPopup(props);
    }
    // открываем попап редактирования информации
    function handleEditProfile() {
      setEditProfilePopupOpen(true);
    }
    // открываем попап добавления нового места
    function handleAddPlace() {
      setAddPlacePopupOpen(true);
      console.log();
    }
    // попап редактирования аватарки
    function handleEditAvatar() {
      setEditAvatarPopupOpen(true);
    }
    // удаления карточки
    function handleDelete(card) {
      setDeleteCard(card)
      setDeletePopupOpen(true)
    }
  
    function closeAllPopups() {
      setEditProfilePopupOpen(false);
      setAddPlacePopupOpen(false);
      setEditAvatarPopupOpen(false);
      setSelectedCard(false);
      setDeletePopupOpen(false)
    }
  
    // добавляем новую карточку
    function handleAddPlaceSubmit({name, link}) {
      api.addNewCard(name, link)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          })
        closeAllPopups();
      }

return(
  <CurrentUserContext.Provider value={currentUser}>  


  <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

<AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit}/>
      
<EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>
 
<DeletePopup isOpen={isDeletePopupOpen} onClose={closeAllPopups} onSubmit={handleCardDeleteSubmit}  />

<ImagePopup card={bigPopup} isOpen={selectedCard} onClose={closeAllPopups}/>
  
<Main      
                onEditProfile={handleEditProfile} 
                onAddPlace={handleAddPlace} 
                onEditAvatar={handleEditAvatar}
                cards={cards}  
              cardLike={handleCardLike} 
              onDeleteButton={handleDelete} 
              onCardClick={handleCardClick}
  />
  
<Footer />

</CurrentUserContext.Provider>

  );
}

export default Elements;