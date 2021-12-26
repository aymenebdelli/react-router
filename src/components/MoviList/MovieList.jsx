import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import './MovieList.css'
function MovieList({movies ,titleSearch, ratingSearch}) {
  return (
    <div className="card-list">
      {movies
      .filter(movie=>movie.title.toUpperCase().includes(titleSearch.toUpperCase()) && movie.rating >= ratingSearch)
        .map((movie, index)=><MovieCard movie={movie} key={index}/> )}
    </div>
  );
}
export default MovieList;
