import React from "react"
import Form from "../Form/Form"
import "../Form/Form.css"

function Register() {
  return (
    <Form
      link="/signin"
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      question="Уже зарегистрированы?"
      linkText=" Войти"
    >
      <label className="form__label">
        Имя
        <input
          className="form__input"
          name="name"
          minLength="2"
          maxLength="40"
          placeholder="Имя"
          type="text"
        />
        <span className="form__error-input">Заполните поле "Имя".</span>
      </label>
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
          placeholder="Ваш пароль"
          type="password"
        />
        <span className="form__error-input">Заполните поле "Пароль".</span>
      </label>
    </Form>
  )
}

export default Register
