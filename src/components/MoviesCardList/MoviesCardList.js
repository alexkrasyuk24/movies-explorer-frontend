import React from "react"
import MoviesCard from "../MoviesCard/MoviesCard"
import SearchError from "../SearchError/SearchError"
import Preloader from "../Preloader/Preloader"
import "./MoviesCardList.css"

function MoviesCardList() {
  return (
    <section className="films">
      <Preloader />
      <SearchError errorText={"Ничего не найдено"} />
      <SearchError
        errorText={
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        }
      />
      <ul className="films__list">
        <MoviesCard />
      </ul>
      <div className="films__button-wrapper">
        <button className="films__button">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList
