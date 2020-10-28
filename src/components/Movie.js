import React from "react";
import { IMG_PATH } from "../utils/constants";

const Movie = ({ movie }) => {
  const { title, genres, poster_path } = movie;
  return (
    <figure className="movie-cell">
      <img
        className="movie-img"
        src={`${IMG_PATH}${poster_path}`}
        alt="movie-poster"
      />
      <figcaption>{`Name: ${title}`}</figcaption>
      <figcaption>{`Genres: ${genres}`}</figcaption>
    </figure>
  );
};

export default Movie;
