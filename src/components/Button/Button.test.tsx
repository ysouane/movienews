import React from "react"
import renderer from "react-test-renderer"
import { render } from "@testing-library/react"
import Button from "./Button"

describe("Button component", () => {
  it("Should return without error", () => {
    render(<Button />)
  })
})
