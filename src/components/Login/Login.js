import React from "react"
import Form from "../Form/Form"
import "../Form/Form.css"

function Login() {
  return (
    <Form
      title="Рады видеть!"
      link="/signup"
      buttonText="Войти"
      question="Еще не зарегистрированы?"
      linkText=" Регистрация"
    >
      <label className="form__label">
        E-mail
        <input
          className="form__input"
          name="email"
          placeholder="Email"
          type="email"
        />
        <span className="form__error-input">
          Адрес электронной почты должен содержать символ "@".
        </span>
      </label>
      <label className="form__label">
        Пароль
        <input
          className="form__input"
          name="password"
          placeholder="пароль"
          type="password"
        />
        <span className="form__error-input">Введите пароль</span>
      </label>
    </Form>
  )
}

export default Login
