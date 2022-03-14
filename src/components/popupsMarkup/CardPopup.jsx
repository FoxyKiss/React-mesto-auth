export default function CardPopup({ cardStates }) {

  function setName(evt) {
    cardStates.setName(evt.target.value);
  }

  function setLink(evt) {
    cardStates.setLink(evt.target.value);
  }

  return (
    <>
      <label className="popup__input-label">
        <input name="name" id="cardName" className="popup__input" type="text" placeholder="Название" required
          minLength="2" maxLength="30" value={cardStates.name} onChange={setName} />
        <span className="popup__input-error cardName-error"></span>
      </label>
      <label className="popup__input-label">
        <input name="link" id="cardLink" className="popup__input" type="url" placeholder="Ссылка на картинку" value={cardStates.link} required onChange={setLink} />
        <span className="popup__input-error cardLink-error"></span>
      </label>
    </>
  );
}