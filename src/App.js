import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";

import { getPokemons } from "./store/ducks/pokemons";
import "./App.css";
import Home from "./pages/Home";
import Details from "./pages/Details";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <main className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
