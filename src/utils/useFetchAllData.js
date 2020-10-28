import { useState, useEffect } from "react";
import fetchData from "./fetchData";
import { GENRES, MOVIES } from "./constants";
import transformGenresObject from "./transformGenresObject";
import convertGenreObjectToString from "./convertGenreObjectToString";

const useFetchAllData = () => {
  const [movies, setMovies] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    Promise.all([fetchData(MOVIES), fetchData(GENRES)])
      .then(([res1, res2]) => {
        const { results } = res1;
        const { genres } = res2;
        const convertedGenres = transformGenresObject(genres);
        const convertedResult = convertGenreObjectToString(
          results,
          convertedGenres
        );
        setMovies(convertedResult);
      })
      .catch(() => {
        // since no error handling method is mentioned, hence just set a simple boolean;
        // there are a few ways to handle it, like retry with a counter for limited times
        // throw error to render error message in UI, etc.
        setError(true);
      });
    // could have axios request cancelToken called at the return,
    // which the axios needed to be cancelled,
    // like when the component unmounts before request is finished
    // but since it is not required, hence not implemented
  }, []);

  return [movies, isError];
};

export default useFetchAllData;
