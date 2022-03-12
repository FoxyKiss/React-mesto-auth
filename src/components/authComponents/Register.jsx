import React from 'react'
import AuthForm from '../AuthForm'
import InfoToolTip from './InfoToolTip'
function Register({ handleRegister }) {
  //? State переменные для передачи данных входа
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const registerInfo = { email, setEmail, password, setPassword }

  function handleSubmit(evt) {
    evt.preventDefault()
    handleRegister(password, email)
    setEmail('')
    setPassword('')
  }

  const formProps = {
    formId: 'signUpForm',
    buttonText: 'Зарегистрироваться',
    title: 'Регистрация',
    sentence: 'Уже зарегистрированы? Войти'
  }
  return (
    <AuthForm authInfo={registerInfo} formProps={formProps} onSubmit={handleSubmit} />
  );
}

export default Register;