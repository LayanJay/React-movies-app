import React, { useEffect, useState } from "react";

import Movie from "./Components/Movie";

function App() {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const FEACHERED_API = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`;

  const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    // requesting
    getMovies(FEACHERED_API);
  }, [FEACHERED_API]);

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

  const home = () => {
    getMovies(FEACHERED_API);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo" onClick={home}>
          MovieHub
        </div>
        <form className="form" onSubmit={handleOnSubmit}>
          <input
            type="search"
            id="search"
            className="search"
            placeholder="Search..."
            value={searchValue}
            onChange={handleOnChange}
          />
          <button type="submit" className="submit-btn">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACmElEQVRIie2Wz04TURTGv3OnrSFQG4kQ/BNj0IUJuFH3oogrEwsxPoAsCISoG+MbGIRXkEdQhBUJwTUaWSgsTJQYjRHS3jL3ThetOtPPxbT4r7QzVVzxrSb3nu/8Tu7MOXOBff0nSbMAkqlta7OAZAmcA3C8uvUJwKqA852ZzFMR+frPwNp1R0TUDIHeJnk2QLl3+NDBuahgVW+RpCoYMw1Rjwn0EvIagjviqD6/XOrwy6UOCVS/EHcBrgE4BeETbbwpknVzRlLBmGltLLWx5bwxY42SkVTamHFtbDn0eFMtQbXrjuxA3eLFqL686w7swF0vGwtKMlUwdkMby7wxY7GLtnaiWvRbksnIxoIxN0Oo96qVd0XS0casaWNZMOZGo9jfksswAIjwkYhU4oJFJBDKbFiENDzuX8DVPoUotRwXuqOKWgqrwIXIYABHASAolT62zK2Ua95jccB/LaVU02lYD/wZAJy2thOtgkVSNe9WHPBLAIBfGWoVTOHV8AErkcECzlfNo622ExVvAYAIF+IYU9rYd+EQMONxwdraybCH7QbJRDyz6w3/GJnuQFRf3nUvaWO/aGOZ97xrzeL/OM7w1yYPARwQUYva2gmSzm4JSDra2kkRtQggBSAXiLxoBq776ZNUBVt8APB+dWVdKLOoqKUgKH0AgESi7SSlMkSFURB9VWsOQDfAdd9xBnvS6VwscE3a9bIQzgA43SiOwHsoue2LPE8GwTNA+pvBo1x9ktvWXiclC8F5hFcfAbAJYkWEC52ZzJyI+ACwVSx2J4JguRk80pSJq81isSsZws8CeMNk4nJXe/vmnoOjwP/5rK7pSDqd9x3nCsB1AGfkmz//8/6egQGgJ53O+Y4zCGAVQLCXrH3tqu/qL3t6BBo3+gAAAABJRU5ErkJggg=="
              alt="search"
            />
          </button>
        </form>
      </div>
      <div className="App">
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
