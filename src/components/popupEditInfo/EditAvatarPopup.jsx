import React from 'react'
import PopUpWithForm from '../PopupWithForm'

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  //? Создание рефа
  const avatarRef = React.useRef({})

  //? Функция отправки формы
  function handleSubmit(evt) {
    evt.preventDefault()

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    }, evt)
  }

  //? Свойства формы
  const formProps = {
    name: 'change-avatar',
    title: 'Обновить Аватар',
    buttonText: 'Сохранить',
    formId: 'avatarForm'
  }

  //? Разметка AvatarPopup
  return (
    <PopUpWithForm formProps={formProps} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} >
      <label className="popup__input-label">
        <input ref={avatarRef} id="avatarLink" name="avatar" className="popup__input" type="url" placeholder="Введите ссылку" required />
        <span className="popup__input-error avatarLink-error"></span>
      </label>
    </PopUpWithForm>
  );
}