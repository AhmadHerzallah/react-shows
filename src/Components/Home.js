import React from 'react';
import '../mainStyle.css';
import { Heart } from 'react-feather';

const Home = () => {
  return (
    <div className="home__Page">
      <h1 data-content="Welcome Home, Coders!">Welcome Home, Coders!</h1>
      <p>
        Hey, I am Ahmad from the future haha, So this is a basic react.js
        project I made just to practice some things in React.js
      </p>
      <p>Hope you like it!</p>
      <div class="footer" style={{ position: 'fixed' }}>
        <p>
          Made with <Heart color="red" size={15} /> By Ahmad H.
        </p>
      </div>
    </div>
  );
};

export default Home;
