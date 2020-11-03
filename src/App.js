import React, { useEffect, useState } from "react";

import Movie from "./Components/Movie";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const FEACHERED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=`;

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  useEffect(() => {
    // requesting
    getMovies(FEACHERED_API);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchValue) {
      getMovies(SEARCH_API + searchValue);

      setSearchValue("");
    }
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="header">
        <div className="logo">MovieHub</div>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            id="search"
            className="search"
            placeholder="Search..."
            value={searchValue}
            onChange={handleOnChange}
          />
        </form>
      </div>
      <div className="App">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

export default App;
