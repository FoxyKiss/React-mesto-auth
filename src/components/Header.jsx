import { Link } from 'react-router-dom'

export default function Header({ signOut, email }) {
  return (
    <header className="header">
      <p className="header__email">{email}</p>
    </header>
  );
}