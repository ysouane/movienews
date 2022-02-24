import React from "react"
import "./Button.scss"

const Button = ({ navigate, text, addOrRemoveIdFromLocalStorage }: any) => {
  return (
    <button
      className="button"
      onClick={
        text === "Retour" ? () => navigate(-1) : addOrRemoveIdFromLocalStorage
      }
      type="button"
    >
      {text}
    </button>
  )
}

export default Button
