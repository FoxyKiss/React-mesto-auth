export default function AvatarPopup({ avatarRef }) {
  return (
    <>
      <label className="popup__input-label">
        <input ref={avatarRef} id="avatarLink" name="avatar" className="popup__input" type="url" placeholder="Введите ссылку" required />
        <span className="popup__input-error avatarLink-error"></span>
      </label>
    </>
  );
}