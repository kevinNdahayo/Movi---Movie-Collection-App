import React, { useState } from 'react'
import MoviesCard from './Components/Movies/MoviesCard'
import Navbar from './Components/Navbar/Navbar'
import { MovieContext } from './Context/MovieContext'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')

  return (
    <MovieContext.Provider value={{ movies, setMovies, search, setSearch }}>
      <Navbar />
      <MoviesCard />
    </MovieContext.Provider>
  )
}

export default App
