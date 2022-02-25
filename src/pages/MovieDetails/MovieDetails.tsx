import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { API_KEY, API_URL, API_VERSION } from "helpers"
import Button from "components/Button"
import "./MovieDetails.scss"

const FAVORITES_CHOICE = {
  ADD: "Ajouter aux favoris",
  REMOVE: "Supprimer des favoris"
}

const MovieDetails = () => {
  const [data, setData] = useState<any>([])
  const [favoritesText, setFavoritesText] = useState(FAVORITES_CHOICE.ADD)
  const location: any = useLocation()
  const navigate: any = useNavigate()
  const { id }: any = location.state || 0 // 0 is the default value in the case where id is null
  const urlMovieDetail = `${API_URL}/${API_VERSION}/movie/${id}?api_key=${API_KEY}&language=fr-Fr&append_to_response=videos,images`

  useEffect(() => {
    async function fetchData() {
      await fetch(urlMovieDetail)
        .then((res) => res.json())
        .then((resJson) => setData(resJson))
        .catch((error) => {
          throw error
        })
    }

    if (id) {
      fetchData()
    }
  }, [id, urlMovieDetail])

  useEffect(() => {
    const favorites = window.localStorage.movies?.split(",")

    const idInFavorites = favorites?.some(
      (favId: string) => favId === id.toString()
    )

    if (idInFavorites) {
      setFavoritesText(FAVORITES_CHOICE.REMOVE)
    }
  }, [id])

  const addOrRemoveIdFromLocalStorage = () => {
    let favorites = window.localStorage.movies

    if (favorites !== undefined) {
      favorites = window.localStorage.movies.split(",")
    } else {
      favorites = []
    }

    const idInFavorites = favorites.some(
      (favId: string) => favId === id.toString()
    )

    if (idInFavorites) {
      if (favorites.length === 1) {
        window.localStorage.removeItem("movies")
      } else {
        const newData = favorites.filter(
          (favId: string) => favId !== id.toString()
        )
        window.localStorage.movies = newData
      }

      setFavoritesText(FAVORITES_CHOICE.ADD)
    } else {
      favorites.push(id)
      window.localStorage.movies = favorites
      setFavoritesText(FAVORITES_CHOICE.REMOVE)
    }
  }

  if (data) {
    return (
      <>
        <div className="movieDetails__backButtonContainer">
          <Button navigate={navigate} text="Retour" />
        </div>
        <div className="movieDetails">
          {data.poster_path ? (
            <img
              className="movieDetails__image"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.original_title}
            />
          ) : (
            <span className="movieDetails__title">{data.original_title}</span>
          )}

          <div className="movieDetails__overview">
            <p>
              Titre du film:{" "}
              {data.original_title}
            </p>
            <p>
              Date de sortie:{" "}
              {data.release_date}
            </p>
            <p>
              Résumé:{" "}
              {data.overview ? data.overview : "Pas de résumé disponible"}
            </p>

            <Button
              navigate={navigate}
              text={favoritesText}
              addOrRemoveIdFromLocalStorage={addOrRemoveIdFromLocalStorage}
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <div>
      <Button navigate={navigate} />
      <p>Désolé pas de détails pour ce film</p>
    </div>
  )
}

export default MovieDetails
