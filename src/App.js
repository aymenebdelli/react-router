import React, {useState} from "react";
import "./App.css";
import Navigation from './components/Navigation/Navigation'
import MovieList from './components/MoviList/MovieList'
import ModalMovie from './components/ModalMovie/ModalMovie'
import Data from './components/Data/Data'
import MovieDetails from "./components/MovieDetails/MovieDetails";
import NotFound from "./components/NotFound"
import {Switch, Route} from 'react-router-dom';

function App() {
  const [ratingSearch, setRatingSearch] = useState(0);
  const getRatingSearch = (input) => {
    setRatingSearch(input);
  };
  const [titleSearch, setTitleSearch] = useState("");
  const getTitleSearch = (input) => {
    setTitleSearch(input);
  };
   const [MoviesListData, setMoviesListData] = useState(Data);
   const getMoviesListData = (input) => {
     setMoviesListData([...MoviesListData, input]);
  };

  return (
      <div className="App"> 
      <Switch>
        <Route exact path="/">
     <Navigation
          getRatingSearch={getRatingSearch}
          getTitleSearch={getTitleSearch}
        />
            <MovieList
              movies={MoviesListData}
              titleSearch={titleSearch}
              ratingSearch={ratingSearch}
            />
            <ModalMovie getMoviesListData={getMoviesListData} /> 

    </Route>
    <Route path="/details/:id" component={MovieDetails} />
    <Route path='*'  component={NotFound} />
    </Switch>
      </div>
  )
}
export default App;
