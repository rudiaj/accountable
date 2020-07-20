import React from "react";
import { useSelector } from "react-redux";

import ListItem from "./ListItem";

const ListGroup = () => {
  const { data } = useSelector((state) => state.pokemons);

  return (
    <div className="list-wrapper">
      <div className="list-group">
        {data.map((pokemon) => (
          <ListItem key={pokemon.name} item={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default ListGroup;
