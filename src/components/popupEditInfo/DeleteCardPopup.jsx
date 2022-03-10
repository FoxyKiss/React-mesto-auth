import React from 'react'
import PopUpWithForm from '../PopupWithForm'

export default function DeleteCardPopup({ isOpen, onClose, onCardDelete, cardId }) {
  //? Функция отправки формы
  function handleSubmit(evt) {
    evt.preventDefault()

    onCardDelete(cardId)
  }

  //? Свойства формы
  const formProps = {
    name: 'delete_card',
    title: 'Вы уверены?',
    buttonText: 'Да',
    formId: 'deletePopForm'
  }

  //? Разметка DeleteCardPopup
  return (
    <PopUpWithForm formProps={formProps} onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit} />
  );
}
