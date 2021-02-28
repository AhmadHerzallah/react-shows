// eslint-disable-next-line
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import '../App.css';
import NavBarMenu from './Nav';
import Home from './Home';
import MoviesList from './MoviesList';
import MovieSearch from './MovieSearch';
import Movie from './Movie';
import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBarMenu />
        <Switch>
          {/* <Home path /> */}
          <Route path="/" exact component={Home} />
          <Route path="/MoviesList" exact component={MoviesList} />
          <Route path="/MovieSearch" exact component={MovieSearch} />
          <Route path="/MovieSearch/:id" component={Movie} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
