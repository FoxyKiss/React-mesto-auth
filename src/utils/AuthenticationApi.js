class CardApi {
  constructor(baseUrl) {
    this._baseUrl = baseUrl
  }

  _checkResponse(res) {
    if (res) {
      return res.json()
    } return Promise.reject(`Ошибка: ${res.status}`)
  }


}
const authApi = new AuthenticationApi('https://auth.nomoreparties.co/')

export default authApi