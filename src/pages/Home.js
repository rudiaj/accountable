import React from "react";
import { useSelector } from "react-redux";

import ListGroup from "../components/ListGroup";
import Pagination from "../components/Pagination";
import ShuffleButton from "../components/ShuffleButton";

const Home = () => {
  const { loading, isLoaded } = useSelector((state) => state.pokemons);

  let content = null;

  if (loading) {
    content = "loading...";
  }

  if (isLoaded) {
    content = (
      <>
        <ShuffleButton />
        <ListGroup />
        <Pagination />
      </>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">{content}</div>
      </div>
    </div>
  );
};

export default Home;
