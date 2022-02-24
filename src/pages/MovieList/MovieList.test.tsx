import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "redux/store"
import { BrowserRouter } from "react-router-dom"
import renderer from "react-test-renderer"
import MovieList from "./MovieList"
import SelectDisplay from "components/SelectDisplay"

describe("MovieList page", () => {
  it("Should return without error", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieList />
        </Provider>
      </BrowserRouter>
    )
  })
})

it("renders select component correctly", () => {
  const tree = renderer.create(<SelectDisplay />).toJSON()
  expect(tree).toMatchSnapshot()
})
