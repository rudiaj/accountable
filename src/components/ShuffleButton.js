import React from "react";
import { useDispatch } from "react-redux";
import { shufflePokemons } from "../store/ducks/pokemons";

const ShuffleButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="btn btn-primary mb-4"
      onClick={() => dispatch(shufflePokemons())}
    >
      Shuffle
    </button>
  );
};

export default ShuffleButton;
