export const BASE_URL = 'https://auth.nomoreparties.co';

const checkResponse = response => response.ok ? response.json() : Promise.reject(`Ошибка ${response.status}`);

export function register(password, email) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ password, email })
  })
    .then(checkResponse)
};