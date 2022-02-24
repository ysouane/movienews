import React, { useState, useEffect } from "react"
import arrow from "./arrow-up.svg"
import "./BackToTop.scss"

function scrollTop(listInnerRef: any) {
  return listInnerRef.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

const BackToTop = (props: any) => {
  const { backToTopVisibility, listInnerRef } = props
  const [isVisible, setIsVisible] = useState(backToTopVisibility)

  useEffect(() => {
    setIsVisible(backToTopVisibility)
  }, [backToTopVisibility])

  if (isVisible) {
    return (
      <button
        type="button"
        className="backToTop"
        onClick={() => scrollTop(listInnerRef)}
        onTouchStart={scrollTop}
      >
        <img src={arrow} alt="arrow" />
      </button>
    )
  }

  return null
}

export default BackToTop
