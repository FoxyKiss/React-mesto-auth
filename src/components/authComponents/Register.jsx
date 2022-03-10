function Register() {
  return (
    <div className="auth-container">
      <h2 className="auth-container__title">Регистрация</h2>
      <form id="signUpForm" className="auth-form">
        <label className="auth-form__label">
          <input id="email" name="email" className="auth-form__input " type="email" placeholder="E-mail" required
            minLength="2" maxLength="40" />
        </label>
        <label className="auth-form__label">
          <input id="paswword" name="password" className="auth-form__input " type="password" placeholder="Пароль" required
            minLength="2" maxLength="200" />
        </label>
        <button className="auth-form__submit" type="submit">Зарегистрироваться</button>
        <span className="auth-form__sentence">Уже зарегистрированы? Войти</span>
      </form >
    </div >
  );
}

export default Register;