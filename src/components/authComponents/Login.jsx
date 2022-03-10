function Login() {
  return (
    <div className="auth-container">
      <h2 className="auth-container__title">Вход</h2>
      <form id="signInForm" className="auth-form">
        <label className="auth-form__label">
          <input id="email" name="email" className="auth-form__input " type="email" placeholder="E-mail" required
            minLength="2" maxLength="40" />
        </label>
        <label className="auth-form__label popup__input-label">
          <input id="paswword" name="password" className="auth-form__input " type="password" placeholder="Пароль" required
            minLength="2" maxLength="200" />
        </label>
        <button className="auth-form__submit" type="submit">Войти</button>
        <span className="auth-form__sentence"></span>
      </form >
    </div >
  );
}

export default Login;