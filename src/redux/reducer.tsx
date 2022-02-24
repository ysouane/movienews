import { API_KEY, API_URL, API_VERSION } from "helpers"
import currentDate from "utils/currentDateUTCFormatted"

export default function Reducer(state: any, action: any) {
  if (action.type === "changeTypeOfDisplayAndUrl") {
    const { value } = action.payload

    if (value === "recentMovies") {
      return {
        ...state,
        typeOfDisplay: "recentMovies",
        url: `${API_URL}/${API_VERSION}/discover/movie?api_key=${API_KEY}&language=fr-Fr&sort_by=release_date.desc&release_date.lte=${currentDate}&page=1`
      }
    }

    if (value === "popularMovies") {
      return {
        ...state,
        typeOfDisplay: "popularMovies",
        url: `${API_URL}/${API_VERSION}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`
      }
    }

    if (value === "favorites") {
      return {
        ...state,
        typeOfDisplay: "favorites"
      }
    }
  }

  return state
}
