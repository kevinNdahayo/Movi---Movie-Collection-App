import React from 'react'
import { IMG_API } from '../../API/movieAPI'
import './MoviesItem.css'
function MoviesItem({ title, poster_path, overview, vote_average }) {
  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie-info">
        <h3>{title}</h3>
        <span className="vote-card">{vote_average}</span>
      </div>
      <div className="movie-over">
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}

export default MoviesItem
