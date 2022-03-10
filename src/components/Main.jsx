import React from 'react';
//? Импорты компонентов
import Card from './Card'
//? Импорт контекста
import { currentUserContext } from '../contexts/currentUserContext'

export default function Main({ cardProps, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onDeleteClick }) {
  //? Подписываемся на контекст для получения данных пользователя
  const currentUser = React.useContext(currentUserContext)

  //? Разметка основного контента
  return (
    <main className="content">
      <div className="profile">
        <div name="profile" className="profile__avatar-container">
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
          <div className="profile__avatar-overlay">
            <button className="profile__avatar-edit" type="button" onClick={onEditAvatar}></button>
          </div>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__subtitle">{currentUser.about}</p>
          <button className="profile__edit-button" type="button" onClick={onEditProfile} ></button>
        </div>
        <button className="profile__add-button" onClick={onAddPlace}></button>
      </div>
      <div className="cards">
        <ul className="cards__list">
          {cardProps.cardsList.map((card) => {
            return (
              //?Создание экземпляра карточки
              <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={cardProps.onCardLike} onDeleteClick={onDeleteClick} />
            );
          })}
        </ul>
      </div>
    </main>
  );
}