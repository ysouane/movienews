import React from "react"
import { render } from "@testing-library/react"
import Header from "./Header"
import { BrowserRouter } from "react-router-dom"

describe("Header component", () => {
  it("Should return without error", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  })
})
