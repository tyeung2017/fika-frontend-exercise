import React from "react";
import Movie from "./Movie";
import useFetchAllData from "../utils/useFetchAllData";

const App = () => {
  const [movies, isError] = useFetchAllData();

  if (isError) {
    return <h4>There is an error</h4>;
  }

  return (
    <div className="App">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </div>
  );
};

export default App;
