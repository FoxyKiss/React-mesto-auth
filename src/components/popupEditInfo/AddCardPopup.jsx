import React from "react";
import PopUpWithForm from "../PopupWithForm";
import { CardPopup } from '../popupsMarkup/popupsMarkup'

export default function AddCardPopup({ isOpen, onClose, onAddCard }) {
  //?State переменные для полей ввода
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')
  const cardStates = { name, link, setName, setLink }

  //? Функция отправки формы
  function handleSubmit(evt) {
    evt.preventDefault();

    onAddCard({
      name,
      link,
    });
    evt.target.reset()
    setName('')
    setLink('')
  }

  //? Свойства формы
  const formProps = {
    name: 'create-cards',
    title: 'Новое место',
    buttonText: 'Сохранить',
    formId: 'cardForm'
  }

  return (
    <PopUpWithForm formProps={formProps} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <CardPopup cardStates={cardStates} />
    </PopUpWithForm>
  );
}