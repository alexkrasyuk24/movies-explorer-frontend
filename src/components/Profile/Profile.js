import React from "react"
import "./Profile.css"

function Profile() {
  return (
    <>
      <section className="profile">
        <h3 className="profile__title">Привет, Alex!</h3>
        <form className="profile__form" noValidate>
          <label className="profile__label">
            Имя
            <input
              className="profile__input"
              name="name"
              minLength="2"
              maxLength="40"
              placeholder="Имя"
              type="text"
            />
            <span className="profile__error-input"></span>
          </label>

          <div className="profile__center-border"></div>
          <label className="profile__label">
            E-mail
            <input
              className="profile__input"
              name="email"
              placeholder="Email"
              type="email"
            />
            <span className="profile__error-input"></span>
          </label>
          <button className="profile__button-save" type="submit">
            Редактировать
          </button>
          <button className="profile__button-exit" type="button">
            Выйти из аккаунта
          </button>
        </form>
      </section>
    </>
  )
}

export default Profile
