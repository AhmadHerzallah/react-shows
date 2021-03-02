import React, { useState, useEffect } from 'react';
import style from '../search.module.css';
import { Search } from 'react-feather';
import ShowMovie from './ShowMovie';
import { Heart } from 'react-feather';

const MovieSearch = () => {
  const [query, setQuery] = useState('Breaking bad');
  const [search, setSearch] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    fetchSearch();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  const fetchSearch = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=e44beea2db1e5054940ae762ef1d9d66&language=en-US&query=${query}&page=1&include_adult=false
    `);
    const data = await response.json();
    setAllMovies(data.results);
  };
  // console.log(allMovies);
  console.log(allMovies);
  return (
    <div>
      <h1 className={style.title}>MovieSearch</h1>
      <form
        onSubmit={search != '' ? getSearch : null}
        className={style.searchForm}
      >
        <div className={style.icon}>
          <Search className={style.searchIcon} color="#6e80a5" size={25} />
        </div>
        <input
          className={style.searchInput}
          type="text"
          placeholder="Write a Movie / TV Show"
          value={search}
          onChange={updateSearch}
        />
        <button className={style.searchBtn}> SEARCH</button>
      </form>
      <div className={style.searchResults}>
        {allMovies
          ? allMovies.map((movie) => (
              <ShowMovie
                name={
                  movie.original_title === undefined
                    ? movie.original_name
                    : movie.original_title
                }
                image={movie.poster_path}
                overview={movie.overview}
                id={movie.id}
                type={movie.media_type}
              />
            ))
          : null}
      </div>
      <div class="footer">
        <p>
          Made with <Heart color="red" size={15} /> By Ahmad H.
        </p>
      </div>
    </div>
  );
};

export default MovieSearch;

{
  /*  */
}

/*

        {allMovies.map((movie) => (
          <ShowMovie
            name={movie.original_title}
            image={movie.poster_path}
            overview={movie.overview}
          />
        ))}




        {allMovies
          ? allMovies.map((movie) => (
              <ShowMovie
                name={
                  movie.original_title === undefined
                    ? movie.original_name
                    : movie.original_title
                }
                image={movie.poster_path}
                overview={movie.overview}
                id={movie.id}
              />
            ))
          : null}



        */
