

export class Api {
  constructor({ baseUrl, headers }) {
  this.baseUrl = baseUrl;
  this.headers = headers;
  }

  getInfo() {
    return fetch( this.baseUrl, {  
        method: 'GET', 
        headers: this.headers 
      })
      .then(res => {
        if (res.ok) {
        return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getInitialCards() {
    return fetch('https://mesto.nomoreparties.co/v1/cohort-12/cards', { 
      method: 'GET',
      headers: this.headers   
    })
    .then(res => {
      if (res.ok) {
          return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Карточки не загружены: ${res.status}`);
      })
  }

  editProfile(name, about) {
    return fetch(this.baseUrl, {
      method: 'PATCH', 
      headers: this.headers,
      body: JSON.stringify({
          name: name,
          about: about
        })
      })
      .then(res => {
      if (res.ok) {
      return res.json();
      }
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
  
  addNewCard(name, link) {
      return fetch('https://mesto.nomoreparties.co/v1/cohort-12/cards', {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          link: link
        }) 
      })
      .then(res => {
          if (res.ok) {
          return res.json();
          }
          // если ошибка, отклоняем промис
          return Promise.reject(`Ошибка: ${res.status}`);
        })
  }
  

  changeLikeCardStatus(id, isLiked) {
  if (isLiked) {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-12/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this.headers,
      }) 
      .then(res => {
       if (res.ok) {
       return res.json();
       }
       // если ошибка, отклоняем промис
       return Promise.reject(`Ошибка: ${res.status}`);
     })
  } else {
    return fetch(`https://mesto.nomoreparties.co/v1/cohort-12/cards/likes/${id}`, {
      method: 'PUT',
      headers: this.headers,
      }) 
      .then(res => {
       if (res.ok) {
       return res.json();
       }
       // если ошибка, отклоняем промис
       return Promise.reject(`Ошибка: ${res.status}`); 
     })  
    }}


  deleteCard(id) {
   return fetch(`https://mesto.nomoreparties.co/v1/cohort-12/cards/${id}`, {
     method: 'DELETE',
     headers: this.headers,
    }) 
    .then(res => {
     if (res.ok) {
     return res.json();
     }
     // если ошибка, отклоняем промис
     return Promise.reject(`Ошибка: ${res.status}`);
   })
  } 

changeAvatar(avatar) {
 return fetch('https://mesto.nomoreparties.co/v1/cohort-12/users/me/avatar' , {
  method: 'PATCH',
  headers: this.headers,
  body: JSON.stringify({
    avatar: avatar
  })
  })
  .then(res => {
   if (res.ok) {
   return res.json();
   }
   // если ошибка, отклоняем промис
   return Promise.reject(`Ошибка: ${res.status}`);
 })
}
}
// создаем экземпляр 
 const api = new Api({ 
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-12/users/me', 
  headers: { 
      authorization: '8eaaf06a-2ca4-4be0-bedd-db145fddf3b1', 
      'Content-Type': 'application/json' 
   } 
}) 

export default api;

