import React from 'react'
import { currentUserContext } from '../contexts/currentUserContext'

//? Разметка карточек
export default function Card({ card, onCardClick, onDeleteClick, onCardLike }) {
  //? Подписываемся на контекст для получения данных пользователя
  const currentUser = React.useContext(currentUserContext)

  //? Определяем, являемся ли мы владельцем текущей карточки и создаём переменную класса
  const isOwn = card.owner._id === currentUser._id;
  const deleteButtonClass = (`cards__delete-button ${isOwn ? '' : 'hide_delete-button'}`);
  //? Определяем, есть ли у карточки лайк, поставленный текущим пользователем  и создаём переменную класса
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const likeButtonClass = `cards__like-button ${isLiked ? 'cards__like-button_active' : ''}`;

  //? Функция для модального окна изображения
  function handleCardClick() {
    onCardClick(card.name, card.link)
  }

  //? Функция для модального окна удаления карточки
  function handleCardDelete() {
    onDeleteClick(card._id)
  }

  //? Функция лайка карточки
  function handleLikeClick() {
    onCardLike(card)
  }

  return (<li className="cards__list_element">
    <button type="button" className={deleteButtonClass} onClick={handleCardDelete}></button>
    <img className="cards__image" src={card.link} alt={card.name} onClick={handleCardClick} />
    <div className="cards__info">
      <h2 className="cards__name">{card.name}</h2>
      <div className="cards__like-container">
        <button type="button" className={likeButtonClass} onClick={handleLikeClick}></button>
        <p className="cards__like-number">{card.likes.length}</p>
      </div>
    </div>
  </li>);
}