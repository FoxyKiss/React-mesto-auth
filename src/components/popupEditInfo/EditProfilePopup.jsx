import React from 'react'
import PopUpWithForm from '../PopupWithForm'
import { ProfilePopup } from '../popupsMarkup/popupsMarkup'
import { currentUserContext } from '../../contexts/currentUserContext'

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  //? Подписываемся на контекст для получения данных пользователя
  const currentUser = React.useContext(currentUserContext)

  //?State переменные для полей ввода
  const [name, setName] = React.useState('')
  const [description, setDescription] = React.useState('')
  const profileInfo = { name, setName, description, setDescription }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

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

  //? Разметка ProfilePopup
  return (
    <PopUpWithForm formProps={formProps} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <ProfilePopup profileInfo={profileInfo} />
    </PopUpWithForm>
  );
}