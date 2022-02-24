import React, { useRef, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BackToTop from "components/BackToTop"
import MovieDetails from "./pages/MovieDetails"
import MovieList from "./pages/MovieList/MovieList"
import Header from "./components/Header"

const App = () => {
  const [reachedBottom, setReachedBottom] = useState(false)
  const [backToTopVisibility, setBackToTopVisibility] = useState(false)
  const listInnerRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current

      if (Math.floor(scrollTop + clientHeight) === scrollHeight) {
        setReachedBottom(true)
      } else {
        setReachedBottom(false)
      }

      if (scrollTop > 300) {
        setBackToTopVisibility(true)
      } else {
        setBackToTopVisibility(false)
      }
    }
  }

  return (
    <div className="App" ref={listInnerRef} onScroll={onScroll}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<MovieList reachedBottom={reachedBottom} />}
          />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
      <BackToTop
        backToTopVisibility={backToTopVisibility}
        listInnerRef={listInnerRef.current}
      />
    </div>
  )
}

export default App
