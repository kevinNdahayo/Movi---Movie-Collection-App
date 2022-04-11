import React from 'react'
import './Navbar.css'
import { useContext, useState } from 'react'
import { MovieContext } from '../../Context/MovieContext'
import { SEARCH_API } from '../../API/movieAPI'
function Navbar() {
  const { search, setSearch, movies, setMovies } = useContext(MovieContext)
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (search) {
      fetch(SEARCH_API + search)
        .then((res) => res.json())
        .then((data) => setMovies(data.results))

      setSearch('')
    }
  }
  const handleOnChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="logo">Movi</div>
      <div className="nav-elements">
        <input
          type="search"
          value={search}
          placeholder=" Search..."
          onChange={handleOnChange}
        />
      </div>
    </form>
  )
}

export default Navbar
