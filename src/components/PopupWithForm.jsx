import React from 'react'

export default function PopUpWithForm({ formProps, isOpen, onClose, children, onSubmit }) {
  const popupRef = React.useRef({})

  //? Закрытие модалки при клике на оверлей
  React.useEffect(() => {
    popupRef.current.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup_open')) {
        onClose()
      }
    })
  }, [])

  //? Основная разметка Popup
  return (
    <div ref={popupRef} className={`popup popup_${formProps.name} ${isOpen && 'popup_open'} `}>
      <div className="popup__container">
        <h2 className="popup__title">{formProps.title}</h2>
        <form id={formProps.formId} className="popup__form" onSubmit={onSubmit} >
          {children}
          <button className="popup__save-button" type="submit">{formProps.buttonText}</button>
        </form>
        <button className="popup__close-button" type="button" onClick={onClose}></button>
      </div>
    </div>
  );
}