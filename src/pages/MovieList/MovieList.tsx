import React, { useState, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeTypeOfDisplayAndUrl } from "redux/actions"
import { checkTypeOfDisplay, checkUrl } from "redux/selectors"
import { API_KEY, API_URL, API_VERSION } from "helpers"
import currentDate from "utils/currentDateUTCFormatted"
import Card from "components/Card"
import SelectDisplay from "components/SelectDisplay"
import "./MovieList.scss"

const TYPE_OF_DISPLAY = {
  RECENT_MOVIES: "recentMovies",
  POPULAR: "popularMovies",
  FAVORITES: "favorites"
}

const MovieList = (props: any) => {
  const { reachedBottom } = props
  const dispatch = useDispatch()
  const typeOfDisplay = useSelector(checkTypeOfDisplay)
  const url = useSelector(checkUrl)
  const page = useRef(1)
  const [data, setData] = useState<any>([])
  const [isLoading, setLoading] = useState(false)
  const [favorites, setFavorites] = useState<any>([])

  async function fetchData(url: string) {
    setLoading(true)

    await fetch(url)
      .then((res) => res.json())
      .then((resJson) => setData(resJson))
      .catch((error) => {
        throw error
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    setData(fetchData(url))
  }, [url])

  const ChangeDisplay = (e: any) => {
    const { value } = e.target
    dispatch(changeTypeOfDisplayAndUrl(value))
  }

  async function fetchMoreData() {
    let url = ""

    if (typeOfDisplay === TYPE_OF_DISPLAY.RECENT_MOVIES) {
      url = `${API_URL}/${API_VERSION}/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=release_date.desc&release_date.lte=${currentDate}&page=${page.current}`
    }

    if (typeOfDisplay === TYPE_OF_DISPLAY.POPULAR) {
      url = `${API_URL}/${API_VERSION}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=${page.current}`
    }

    setLoading(true)

    await fetch(url)
      .then((res) => res.json())
      .then((resJson) =>
        setData({ results: [...data.results, ...resJson.results] })
      )
      .catch((error) => {
        throw error
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (reachedBottom === true && typeOfDisplay !== TYPE_OF_DISPLAY.FAVORITES) {
      page.current += 1
      fetchMoreData()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reachedBottom])

  async function fetchFavorites(url: string) {
    await fetch(url)
      .then((res) => res.json())
      .then((resJson: any) => {
        setFavorites((favorites: never) => [...favorites, resJson])
      })
      .catch((error) => {
        throw error
      })
  }

  useEffect(() => {
    if (typeOfDisplay === TYPE_OF_DISPLAY.FAVORITES) {
      setFavorites([])
      let favorites = window.localStorage.movies

      if (favorites !== undefined) {
        favorites = window.localStorage.movies.split(",")
        for (let i = 0; i < favorites.length; i += 1) {
          fetchFavorites(
            `${API_URL}/${API_VERSION}/movie/${favorites[i]}?api_key=${API_KEY}&language=fr-FR`
          )
        }
      }
    }
  }, [typeOfDisplay])

  if (data?.results?.length > 1 || favorites?.length > 1) {
    return (
      <div className="movieList">
        <div className="movieList__selectDisplay">
          <SelectDisplay
            changeDisplay={ChangeDisplay}
            selected={typeOfDisplay}
          />
        </div>

        <div className="movieList__card">
          {typeOfDisplay === TYPE_OF_DISPLAY.RECENT_MOVIES ||
          typeOfDisplay === TYPE_OF_DISPLAY.POPULAR
            ? data?.results?.map((res: any) => {
                return (
                  <div key={res.id}>
                    <Card
                      posterPath={res.poster_path}
                      backdropPath={res.backdrop_path}
                      title={res.title}
                      release_date={res.release_date}
                      movieId={res.id}
                    />
                  </div>
                )
              })
            : favorites.map((res: any) => {
                return (
                  <div key={res.id}>
                    <Card
                      posterPath={res.poster_path}
                      backdropPath={res.backdrop_path}
                      title={res.title}
                      release_date={res.release_date}
                      movieId={res.id}
                    />
                  </div>
                )
              })}
        </div>
      </div>
    )
  }

  return (
    <Card
      posterPath={favorites?.poster_path}
      backdropPath={favorites?.backdrop_path}
      title={favorites?.title}
      release_date={favorites?.release_date}
      movieId={favorites?.id}
    />
  )
}

export default MovieList
