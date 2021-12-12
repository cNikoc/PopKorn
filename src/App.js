import React from "react";

import Favorites from "./components/Favorites/Favorites";
import Buscador from "./components/Buscador/Buscador";
import NavBar from "./components/NavBar/NavBar";
import { Route } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Home from "./components/Home/Home";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route path="/favs" component={Favorites} />
      <Route path="/movie/:id" component={Movie} />
      <Route path="/search/:page" component={Buscador} />
    </React.Fragment>
  );
}

export default App;
