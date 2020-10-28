const mapGenreIDToString = (genre_ids, genres) => {
    let result = "";
  
    genre_ids.forEach((id, i) => {
      result += `${genres[id]}`;
      if (i !== genre_ids.length - 1) result += ", ";
    });
  
    return result;
  };
  
  const convertGenreObjectToString = (movies, genresMap) => {
    return movies.map((movie) => {
      const genres = mapGenreIDToString(movie.genre_ids, genresMap);
      return {
        ...movie,
        genres
      };
    });
  };
  
  export default convertGenreObjectToString;
  