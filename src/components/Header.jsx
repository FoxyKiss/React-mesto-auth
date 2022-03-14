import { Link, Route } from 'react-router-dom'

export default function Header({ signOut, email }) {
  return (
    <header className="header">
      <p className="header__email">{email}</p>
      <Route exact path="/">
        <button onClick={signOut} className='header__auth-link'>Выйти</button>
      </Route>
      <Route path="/sign-in">
        <Link to='/sign-up' className='header__auth-link'>Регистрация</Link>
      </Route>
      <Route path="/sign-up">
        <Link to='/sign-in' className='header__auth-link'>Войти</Link>
      </Route>
    </header >
  );
}