import AuthForm from '../AuthForm'
function Register() {
  const formProps = {
    formId: 'signUpForm',
    buttonText: 'Зарегистрироваться',
    title: 'Регистрация',
    sentence: 'Уже зарегистрированы? Войти'
  }
  return (
    <AuthForm formProps={formProps} />
  );
}

export default Register;