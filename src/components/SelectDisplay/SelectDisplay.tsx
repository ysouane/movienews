import React from "react"
import "./SelectDisplay.scss"

const SelectDisplay = ({ selected, changeDisplay }: string | any) => {
  return (
    <label htmlFor="typeOfDisplay">
      <select
        className="selectDisplay"
        id="typeOfDisplay"
        onChange={changeDisplay}
        defaultValue={selected}
      >
        <option value="recentMovies">Films récent</option>
        <option value="popularMovies">Films les plus populaires</option>
        <option value="favorites">Favoris</option>
      </select>
    </label>
  )
}

export default SelectDisplay
