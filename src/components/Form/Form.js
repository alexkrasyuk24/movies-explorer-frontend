import React from "react"
import { Link } from "react-router-dom"
import logoSite from "../../images/logo.svg"
import "./Form.css"

function Form({  link, linkText, title, children, buttonText, question }) {
  return (
    <section className="form">
      <Link to="/" className="logo">
        <img src={logoSite} alt="Логотип" />
      </Link>
      <h3 className="form__title">{title}</h3>
      <form className="forma" noValidate>
        {children}
        <button className="form__button-save" type="submit">
          {buttonText}
        </button>
      </form>
      <p className="form__text">
        {question}
        <Link to={link} className="form__link">
          {linkText}
        </Link>
      </p>
    </section>
  )
}

export default Form
