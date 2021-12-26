import React from "react";
import "./MovieCard.css";
import {Link} from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    <div>
      <section className="cards-pos">
        <article className="position">
          <header className="head">
            <p>{"⭐".repeat(movie.rating)}</p>
            <h5>{movie.description}</h5>
          </header>

          <div className="author">
            <img className="style-im" src={movie.posterUrl} />

            <div className="author-name">
              <div className="author-name-prefix">Title</div>
              {movie.title}
            </div>
          </div>

          <div className="tags">
            <Link className="link-pos" to={`/details/${movie.id}`}>Watch trailer</Link>
          </div>
        </article>
      </section>
    </div>
  );
}
export default MovieCard;
