/* eslint-disable import/no-duplicates */
import React, { useState, useMemo } from "react"
import { Link } from "react-router-dom"
import currentDate from "utils/currentDateUTCFormatted"
import { formatDistanceToNow, isSameDay, isSameYear } from "date-fns"
import frLocale from "date-fns/locale/fr"
import "./Card.scss"

interface Props {
  posterPath: string
  backdropPath: string
  title: string
  release_date: string
  movieId: number
}

const Card = (props: Props) => {
  const { posterPath, backdropPath, title, release_date, movieId } = props
  const url = "https://image.tmdb.org/t/p/w500"
  const [urlImage, setUrlImage] = useState(`${url}${posterPath}`)
  const [
    differenceBetweenReleaseDateAndToday,
    setDifferenceBetweenReleaseDateAndToday
  ] = useState("")

  const handleMouseEvent = (e: any) => {
    const { type } = e
    if (type === "mouseover" && backdropPath) {
      setUrlImage(`${url}${backdropPath}`)
    } else {
      setUrlImage(`${url}${posterPath}`)
    }
  }

  useMemo(() => {
    const checkIfMovieReleaseTheSameYear = isSameYear(
      new Date(release_date),
      new Date(currentDate)
    )
    const checkIfMovieReleaseTheSameDay = isSameDay(
      new Date(release_date),
      new Date(currentDate)
    )

    if (checkIfMovieReleaseTheSameYear && !checkIfMovieReleaseTheSameDay) {
      setDifferenceBetweenReleaseDateAndToday(
        formatDistanceToNow(new Date(release_date), {
          addSuffix: true,
          locale: frLocale
        })
      )
    }
  }, [release_date])

  return (
    <Link to={`/movieDetails/${movieId}`} state={{ id: movieId }}>
      <div className="card" data-id={movieId}>
        {posterPath ? (
          <img
            className="card__image"
            onMouseOver={handleMouseEvent}
            onFocus={handleMouseEvent}
            onMouseOut={handleMouseEvent}
            onBlur={handleMouseEvent}
            src={urlImage}
            alt={title}
          />
        ) : (
          <span className="card__title">{title}</span>
        )}

        <p className="card__releaseDate">Sortie prévu le : {release_date}</p>

        <p className="card__releaseDate">
          {differenceBetweenReleaseDateAndToday
            ? `(${differenceBetweenReleaseDateAndToday})`
            : null}
        </p>
      </div>
    </Link>
  )
}

export default Card
