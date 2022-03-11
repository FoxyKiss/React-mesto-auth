import React from 'react'

import AuthForm from '../AuthForm'
function Login() {
  //? State переменные для передачи данных входа
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const loginInfo = { email, setEmail, password, setPassword }

  function handleSubmit(evt) {
    evt.preventDefault()
    console.log(email, password)
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