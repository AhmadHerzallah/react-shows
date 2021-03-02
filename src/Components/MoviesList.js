import React, { useState, useEffect } from 'react';
import ShowMovie from './ShowMovie';
import '../movies.css';
import { Heart } from 'react-feather';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=e44beea2db1e5054940ae762ef1d9d66&language=en-US&page=1`,
    );
    const data = await response.json();
    setMovies(data.results);
  };
  console.log(movies);

  return (
    <div>
      <h1 className="title">Top Rated Movie</h1>
      {/* <ShowMovie
        name="Breaking Bad"
        image="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSK9eqijqRLTwXWp8mGWvE5ti1l3FCZ2qVkx83TJNW2SRT4vkHC"
        overview="Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a meek high school chemistry teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to financially provide for his family after being diagnosed with terminal lung cancer.
        "
      /> */}

      <div className="movies">
        {movies.map((movie) => (
          <div>
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
          </div>
        ))}
      </div>
      <div class="footer">
        <p>
          Made with <Heart color="red" size={15} /> By Ahmad H.
        </p>
      </div>
    </div>
  );
};

export default MoviesList;

/*


        {movies.map((movie) => (
          <div>
            <ShowMovie
              name={movie.original_title}
              image={movie.poster_path}
              overview={movie.overview}
            />
          </div>
        ))}
*/
