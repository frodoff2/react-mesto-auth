export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch (`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    })
    .then((res) => {
        try {
          if (res.status === 201){
            return res.json();
          }
        } catch(err) {
            return err
        }
    }) 
    .then((res) => {
      return res;
    })
};


export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email, password
    })
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 401) {
          return console.log('некорректно заполнено одно из полей')
        }
      }
      catch (err) {
        return err;
      };
    })
    .then((data) => {
      localStorage.setItem('jwt', data.token);
      return data;
    });
}

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${token}`
    },
  })
    .then((res) => {
      try {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 401) {
          return console.log('Токен не передан или передан не в том формате')
        }
      }
      catch (err) {
        return err;
      };
    })
    .then((data) => {
      return data;
    });
}