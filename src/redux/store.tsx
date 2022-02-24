import { createStore } from "redux"
import { API_KEY, API_URL, API_VERSION } from "helpers"
import currentDate from "utils/currentDateUTCFormatted"
import Reducer from "./reducer"

export const initialState: any = {
  typeOfDisplay: "recentMovies",
  url: `${API_URL}/${API_VERSION}/discover/movie?api_key=${API_KEY}&language=fr-Fr&sort_by=release_date.desc&release_date.lte=${currentDate}&page=1`,
  favorites: []
}

export const store = createStore(Reducer, initialState)
