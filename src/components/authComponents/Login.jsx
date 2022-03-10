import AuthForm from '../AuthForm'

function Login() {
  const formProps = {
    formId: 'signInForm',
    buttonText: 'Войти',
    title: 'Вход',
    sentence: ''
  }
  return (
    <AuthForm formProps={formProps} />
  );
}

export default Login;