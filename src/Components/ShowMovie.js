import React from 'react';
import ReactReadMoreReadLess from 'react-read-more-read-less';

const ShowMovie = ({ name, image, overview, id }) => {
  console.log(name, image, overview, id);
  return (
    <div class="movies-container">
      <div class="movie">
        <div class="movie-preview">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${image}`}
            width="225px"
            alt=""
          />
        </div>
        <div class="movie-info">
          <h2 className="movieName">
            <a href={`/MovieSearch/${id}`}>{name}</a>
          </h2>
          {/* <p>{overview}</p> */}
          {!!overview && (
            <ReactReadMoreReadLess
              charLimit={180}
              readMoreText={'Read more ▼'}
              readLessText={'Read less ▲'}
            >
              {overview}
            </ReactReadMoreReadLess>
          )}
          {/* <ReactReadMoreReadLess
            charLimit={180}
            readMoreText={'Read more ▼'}
            readLessText={'Read less ▲'}
          >
            {overview && overview}
          </ReactReadMoreReadLess> */}
        </div>
      </div>
    </div>
  );
};

export default ShowMovie;
