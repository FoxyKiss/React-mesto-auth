//? Разметка для вызова PopupImages
export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <div className={`popup popup_images ${isOpen && 'popup_open'}`}>
      <div className="popup__image-container">
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__image-name">{card.name}</p>
        <button id="imagePopCloseButton" className="popup__close-button" type="button" onClick={onClose}></button>
      </div>
    </div>
  );
}