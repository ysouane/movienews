import React from "react"
import { render } from "@testing-library/react"
import BackToTop from "./BackToTop"

describe("BackToTop component", () => {
  it("Should return without error", () => {
    render(<BackToTop />)
  })
})
