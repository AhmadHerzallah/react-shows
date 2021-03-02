import React, { useState, useEffect } from 'react';
import style from '../movie.module.css';
const Movie = (match) => {
  console.log(match);
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetchTV();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${match.match.params.id}?api_key=e44beea2db1e5054940ae762ef1d9d66&language=en-US`,
    );
    const data = await response.json();
    console.log(data);
  };
  const fetchTV = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${match.match.params.id}?api_key=e44beea2db1e5054940ae762ef1d9d66&language=en-US`,
    );
    const data = await response.json();
    // console.log(data);
    setMovieData(data);
  };
  console.log(movieData);

  return (
    <div>
      <h1 className="title">
        {movieData.original_title === undefined
          ? movieData.original_name
          : movieData.original_title}
      </h1>
      {/* <img
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieData.poster_path}`}
        width="225px"
        alt=""
        style={{ borderRadius: '5px' }}
      /> */}
      <div className={style.movieImageWrapper}>
        {movieData.seasons &&
          movieData.seasons.map((season) => (
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${season.poster_path}`}
              width="225px"
              alt=""
              data-content={season.name}
              className={style.movieImage}
            />
          ))}
      </div>
      <p>Description</p>
      <p>- Ratings -</p>
    </div>
  );
};

export default Movie;
