import React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import "./Header.css"
import logoSite from "../../images/logo.svg"
import account from "../../images/account-btn.svg"
import mobileMenu from "../../images/menu-button.svg"
import Navigation from "../Navigation/Navigation"

function Header() {
  const [isClicked, setIsClicked] = React.useState(false)

  const location = useLocation()

  const viewHeaderOne = () => {
    const { pathname } = location
    return pathname === "/"
  }

  const viewHeaderTwo = () => {
    const { pathname } = location
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    )
  }

  function openMobileMenu() {
    setIsClicked(true)
  }

  function closeMobileMenu() {
    setIsClicked(false)
  }

  return (
    <>
      {viewHeaderOne() && (
        <header className="header">
          <Link to="/" className="logo">
            <img src={logoSite} alt="Логотип" />
          </Link>
          <div className="header__button-wrapper">
            <Link to="/signup" className="header__button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__button header__button-green">
              Войти
            </Link>
          </div>
        </header>
      )}

      {viewHeaderTwo() && (
        <header className="header header_two">
          <Link to="/" className="logo">
            <img src={logoSite} alt="Логотип" />
          </Link>
          <div className="header__button-wrapper-films">
            <NavLink
              className="header__button"
              to="/movies"
              activeclassname="header__button_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              className="header__button"
              to="/saved-movies"
              activeclassname="header__button_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__button-wrapper">
            <Link to="/profile" className="header__button-account">
              <img
                className="header__image-account"
                src={account}
                alt="Кнопка аккаунт"
              />
            </Link>
            <button className="header__button-mobile" onClick={openMobileMenu}>
              <img src={mobileMenu} alt="Кнопка мобильного меню" />
            </button>
          </div>
          {isClicked ? <Navigation closeMobileMenu={closeMobileMenu} /> : ""}
        </header>
      )}
    </>
  )
}

export default Header
