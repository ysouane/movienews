import React from "react"
import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "redux/store"
import { BrowserRouter } from "react-router-dom"
import Card from "./Card"

describe("Card component", () => {
  it("Should return without error", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Card posterPath="test" backdropPath="test" title="Spiderman" release_date="2022-01-01" movieId={0} />
        </Provider>
      </BrowserRouter>
    )
  })
})
