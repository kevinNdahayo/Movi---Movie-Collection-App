import React from 'react'
import { useEffect, useContext } from 'react'
import { Movie_API, IMG_API, SEARCH_API } from '../../API/movieAPI'
import MoviesItem from './MoviesItem'
import { MovieContext } from '../../Context/MovieContext'
import { v4 as uuidv4 } from 'uuid'
import './MoviesCard.css'

const MoviesCard = () => {
  const { movies, setMovies } = useContext(MovieContext)
  useEffect(() => {
    fetch(Movie_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  })
  return (
    <div className="movie-container">
      {movies.map((movie) => {
        return <MoviesItem key={uuidv4()} {...movie} />
      })}
    </div>
  )
}

export default MoviesCard
