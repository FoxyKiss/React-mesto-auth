import React from 'react'

export default function PopUpWithForm({ formProps, isOpen, onClose, children, onSubmit }) {
  //? Закрытие модалки при клике на оверлей
  React.useEffect(() => {
    function clickOverlayClose(evt) {
      if (evt.target.classList.contains('popup_open')) {
        onClose()
      }
    }
    document.addEventListener("click", clickOverlayClose);

    return () => document.removeEventListener("click", clickOverlayClose);
  }, [])

  //? Основная разметка Popup
  return (
    <div className={`popup popup_${formProps.name} ${isOpen && 'popup_open'} `}>
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