import React from 'react'
import AuthForm from '../AuthForm'

function Login({ handleAuthorize }) {
  //? State переменные для передачи данных входа
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const loginInfo = { email, setEmail, password, setPassword }

  function handleSubmit(evt) {
    evt.preventDefault()

    handleAuthorize(password, email)
    setEmail('')
    setPassword('')
  }

  const formProps = {
    formId: 'signInForm',
    buttonText: 'Войти',
    title: 'Вход',
    sentence: ''
  }
  return (
    <AuthForm authInfo={loginInfo} formProps={formProps} onSubmit={handleSubmit} />
  );
}

export default Login;