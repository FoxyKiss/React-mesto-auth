
function InfoToolTip({ onClose, isOpen, notification }) {
  return (
    <div className={`popup popup_notification ${isOpen && 'popup_open'} `}>
      <div className="popup__container">
        <img className="popup_notification-image" src={notification.image} alt={notification.alt} />
        <h2 className="popup__title popup__title_notification ">{notification.title}</h2>
        <button className="popup__close-button" type="button" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoToolTip;