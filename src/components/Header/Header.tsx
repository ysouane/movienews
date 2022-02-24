import React from "react"
import { Link } from "react-router-dom"
import "./Header.scss"

const Header = () => (
  <div className="header">
    <header>
      <Link to="/">
        <h1>Movie News</h1>
      </Link>
    </header>
  </div>
)

export default Header
