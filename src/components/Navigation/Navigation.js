import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navigation.css"
import account from "../../images/account-btn.svg"

function Navigation({ closeMobileMenu }) {
  return (
    <div className="navigation__page">
      <div className="navigation__container"></div>
      <div className="navigation__mobile-menu">
        <button
          className="navigation__button-close"
          onClick={closeMobileMenu}
        ></button>
        <nav className="navigation__links">
          <NavLink
            className="navigation__link"
            exact
            to="/"
            activeclassname="navigation__link_active"
          >
            Главная
          </NavLink>
          <NavLink
            className="navigation__link"
            to="/movies"
            activeclassname="navigation__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            className="navigation__link"
            to="/saved-movies"
            activeclassname="navigation__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="navigation__button-account">
          <img src={account} alt="Кнопка аккаунт" />
        </Link>
      </div>
    </div>
  )
}

export default Navigation
