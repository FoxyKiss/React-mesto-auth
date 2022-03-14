export default function ProfilePopup({ profileInfo }) {

  function setName(evt) {
    profileInfo.setName(evt.target.value);
  }

  function setDescription(evt) {
    profileInfo.setDescription(evt.target.value);
  }

  return (
    <>
      <label className="popup__input-label">
        <input id="profileName" name="name" className="popup__input" type="text" placeholder="Введите своё Имя" required
          minLength="2" maxLength="40" value={profileInfo.name} onChange={setName} />
        <span className="popup__input-error profileName-error"></span>
      </label>
      <label className="popup__input-label">
        <input id="profileAbout" name="about" className="popup__input" type="text" placeholder="Коротко о себе" required
          minLength="2" maxLength="200" value={profileInfo.description} onChange={setDescription} />
        <span className="popup__input-error profileAbout-error"></span>
      </label>
    </>
  );
}