import { Link } from 'react-router-dom'

function AuthForm({ formProps, authInfo, onSubmit }) {
  function setEmail(evt) {
    authInfo.setEmail(evt.target.value)
  }

  function setPassword(evt) {
    authInfo.setPassword(evt.target.value)
  }

  return (
    <div className="auth-container">
      <h2 className="auth-container__title">{formProps.title}</h2>
      <form onSubmit={onSubmit} id={formProps.formId} className="auth-form">
        <label className="auth-form__label">
          <input id="email" name="email" className="auth-form__input " type="email" placeholder="E-mail" required
            minLength="2" maxLength="40" value={authInfo.email} onChange={setEmail} />
        </label>
        <label className="auth-form__label popup__input-label">
          <input id="paswword" name="password" className="auth-form__input " type="password" placeholder="Пароль" required
            minLength="2" maxLength="200" autoComplete="off" value={authInfo.password} onChange={setPassword} />
        </label>
        <button className="auth-form__submit" type="submit">{formProps.buttonText}</button>
        <Link to="/login" className="auth-form__sentence">{formProps.sentence}</Link>
      </form >
    </div >
  );
}

export default AuthForm