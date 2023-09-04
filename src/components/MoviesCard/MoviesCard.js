import React from "react"
import "./MoviesCard.css"

function MoviesCard() {
  return (
    <>
      <li className="film">
        <img alt="" className="film__image" />
        <div className="film__wrapper">
          <div className="film__title-wrapper">
            <h2 className="film__title">33 слова о дизайне</h2>
            <span className="film__time">1ч 37м</span>
          </div>
          <button className="film__button-like" type="button"></button>
        </div>
      </li>
      <li className="film">
        <img alt="" className="film__image" />
        <div className="film__wrapper">
          <div className="film__title-wrapper">
            <h2 className="film__title">33 слова о дизайне</h2>
            <span className="film__time">1ч 37м</span>
          </div>
          <button
            className="film__button-like film__button-like_active"
            type="button"
          ></button>
        </div>
      </li>
      <li className="film">
        <img alt="" className="film__image" />
        <div className="film__wrapper">
          <div className="film__title-wrapper">
            <h2 className="film__title">33 слова о дизайне</h2>
            <span className="film__time">1ч 37м</span>
          </div>
          <button className="film__delete-button" type="button"></button>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
