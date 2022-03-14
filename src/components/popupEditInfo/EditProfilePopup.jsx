import React from 'react'
import PopUpWithForm from '../PopupWithForm'
import { currentUserContext } from '../../contexts/currentUserContext'

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  //? Подписываемся на контекст для получения данных пользователя
  const currentUser = React.useContext(currentUserContext)

  //?State переменные для полей ввода
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  //? Функция отправки формы
  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  //? Свойства формы
  const formProps = {
    name: 'edit-profile',
    title: 'Редактировать профиль',
    buttonText: 'Сохранить',
    formId: 'profileForm'
  }

  function onChangeName(evt) {
    setName(evt.target.value);
  }

  function onChangeDescription(evt) {
    setDescription(evt.target.value);
  }


  //? Разметка ProfilePopup
  return (
    <PopUpWithForm formProps={formProps} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <label className="popup__input-label">
        <input id="profileName" name="name" className="popup__input" type="text" placeholder="Введите своё Имя" required
          minLength="2" maxLength="40" value={name} onChange={onChangeName} />
        <span className="popup__input-error profileName-error"></span>
      </label>
      <label className="popup__input-label">
        <input id="profileAbout" name="about" className="popup__input" type="text" placeholder="Коротко о себе" required
          minLength="2" maxLength="200" value={description} onChange={onChangeDescription} />
        <span className="popup__input-error profileAbout-error"></span>
      </label>
    </PopUpWithForm>
  );
}