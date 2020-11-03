import React from "react";

const Movie = ({ title, poster_path, vote_average, overview }) => {
  const IMG_API = `https://image.tmdb.org/t/p/w1280/`;

  return (
    <div className="movie">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie-info">
        <h5>{title}</h5>
        <span>{vote_average}</span>
      </div>
      <div className="movie-overview">
        <h3>overview</h3>
        <div>{overview}</div>
      </div>
    </div>
  );
};

export default Movie;
