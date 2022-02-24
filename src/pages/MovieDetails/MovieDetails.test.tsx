import React from "react"
import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import MovieDetails from "./MovieDetails"
import Button from "components/Button"
import { Provider } from "react-redux"
import { store } from "redux/store"
import { BrowserRouter } from "react-router-dom"

describe("MovieDetails page", () => {
  it("Should return without error", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <MovieDetails />
        </Provider>
      </BrowserRouter>
    )
  })
})

it("renders button component correctly", () => {
  const tree = renderer.create(<Button />).toJSON()
  expect(tree).toMatchSnapshot()
})
