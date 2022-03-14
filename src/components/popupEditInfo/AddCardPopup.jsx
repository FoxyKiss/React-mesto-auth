import React from "react";
import PopUpWithForm from "../PopupWithForm";

export default function AddCardPopup({ isOpen, onClose, onAddCard }) {
  //?State переменные для полей ввода
  const [name, setName] = React.useState('')
  const [link, setLink] = React.useState('')

  //? Функция отправки формы
  function handleSubmit(evt) {
    evt.preventDefault();

    onAddCard({
      name,
      link,
    }, evt);
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
  function onChangeName(evt) {
    setName(evt.target.value);
  }

  function onChangeLink(evt) {
    setLink(evt.target.value);
  }


  return (
    <PopUpWithForm formProps={formProps} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__input-label">
        <input name="name" id="cardName" className="popup__input" type="text" placeholder="Название" required
          minLength="2" maxLength="30" value={name} onChange={onChangeName} />
        <span className="popup__input-error cardName-error"></span>
      </label>
      <label className="popup__input-label">
        <input name="link" id="cardLink" className="popup__input" type="url" placeholder="Ссылка на картинку" value={link} required onChange={onChangeLink} />
        <span className="popup__input-error cardLink-error"></span>
      </label>
    </PopUpWithForm>
  );
}