import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
//? Импорты компонентов
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './popupEditInfo/EditProfilePopup'
import EditAvatarPopup from './popupEditInfo/EditAvatarPopup'
import AddCardPopup from './popupEditInfo/AddCardPopup'
import DeleteCardPopup from './popupEditInfo/DeleteCardPopup'
//? Импорт компонентов аутентификации
import Login from './authComponents/Login'
import Register from './authComponents/Register'
import ProtectedRoute from './authComponents/ProtectedRoute'
import InfoTooltip from './authComponents/InfoTooltip'
//? Импорт контекста
import { currentUserContext } from '../contexts/currentUserContext'

//? Импорт компонента cardApi
import cardApi from '../utils/CardApi'

function App() {
  //? State переменные для активации модалок
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [imagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' })
  //? State переменная для получения информации о пользователе
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '', avatar: '' })
  //? State переменная для получения массива карточек
  const [cardsList, setCardsList] = React.useState([]);
  //? State переменная для получения id карточки
  const [cardDeleteId, setCardDeleteId] = React.useState('')
  //? State переменная статуса авторизации
  const [loggedIn, setLoggedIn] = React.useState(true)
  //? Функции изменения стейтов для модалок
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
    document.addEventListener('keydown', handleEscClose)
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
    document.addEventListener('keydown', handleEscClose)
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
    document.addEventListener('keydown', handleEscClose)
  }

  function handleCardClick(name, link) {
    setSelectedCard({ name, link });
    setImagePopupOpen(true);
    document.addEventListener('keydown', handleEscClose)
  }

  function handleDeleteCardClick(id) {
    setDeleteCardPopupOpen(true);
    setCardDeleteId(id)
    document.addEventListener('keydown', handleEscClose)
  }

  //? Функции закрытия модалок
  function handleEscClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups()
    }
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({ name: '', link: '' });
    setCardDeleteId('')
    document.removeEventListener('keydown', handleEscClose)
  }

  //?Изменение state переменной для получения информации о пользователе и массива карточек
  React.useEffect(() => {
    Promise.all([cardApi.getInfo(), cardApi.getStartCards()])
      .then(([info, cardsList]) => {
        setCurrentUser(info);
        setCardsList(cardsList);
      }).catch(err => console.log(`Ошибка: ${err.status}`));
  }, []);

  //? Функция удаления карточки
  function handleCardDelete(cardId) {
    cardApi.deleteCard(cardId)
      .then(() => {
        setCardsList(cardsList.filter((item) => {
          return item._id !== cardId
        }))
        closeAllPopups()
      }).catch(err => console.log(`Ошибка: ${err.status}`));
  }
  //? Функция лайка карточки
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (!isLiked) {
      cardApi.activeLike(card).then((newCard) => {
        setCardsList((state) => state.map((c) => c._id === card._id ? newCard : c));
      }).catch(err => console.log(`Ошибка: ${err.status}`));;
    } else {
      cardApi.deactiveLike(card).then((newCard) => {
        setCardsList((state) => state.map((c) => c._id === card._id ? newCard : c));
      }).catch(err => console.log(`Ошибка: ${err.status}`));;
    }
  }

  //? Обработчики изменения данных
  function handleUpdateUser(data) {
    cardApi.setInfo(data)
      .then((info) => {
        setCurrentUser(info);
        closeAllPopups()
      }).catch(err => console.log(`Ошибка: ${err.status}`));
  }

  function handleUpdateAvatar(data) {
    cardApi.setAvatar(data)
      .then((info) => {
        setCurrentUser((user) => ({ ...user, avatar: info.avatar }))
        closeAllPopups()
      }).catch(err => console.log(`Ошибка: ${err.status}`));
  }

  function handleAddCard(data) {
    cardApi.postCard(data)
      .then((newCard) => {
        setCardsList([newCard, ...cardsList]);
        closeAllPopups()
      }).catch(err => console.log(`Ошибка: ${err.status}`));
  }

  //? Свойства card для передачи в Main
  const cardProps = {
    cardsList: cardsList,
    onCardDelete: handleCardDelete,
    onCardLike: handleCardLike
  }

  //? Разметка страницы
  return (
    <BrowserRouter>
      <div className="page">
        <currentUserContext.Provider value={currentUser}>
          <Header />
          <Switch>
            <ProtectedRoute
              path="/main"
              loggedIn={loggedIn}
              component={Main}
              cardProps={cardProps}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}
              onDeleteClick={handleDeleteCardClick}
            />
            <Route path="/sign-in"><Login /></Route>
            <Route path="/sign-up"><Register /></Route>
            <Route path="/"> {loggedIn ? <Redirect to="/main" /> : <Redirect to="/sign-in" />}</Route>
          </Switch >
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard} />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <DeleteCardPopup isOpen={isDeleteCardPopupOpen} onClose={closeAllPopups} onCardDelete={handleCardDelete} cardId={cardDeleteId} />
          <ImagePopup card={selectedCard} isOpen={imagePopupOpen} onClose={closeAllPopups} />
        </currentUserContext.Provider>
      </div >
    </BrowserRouter>
  );
}

export default App;