import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getPokemon } from "../store/ducks/pokemon";
import { remove } from "../store/ducks/pokemons";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const { data, loading, isLoaded } = useSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemon(id));
  }, [dispatch, id]);

  const onRemoveClick = () => {
    dispatch(remove(data.name));
    history.push("/");
  };

  let content = null;

  if (loading) {
    content = "loading...";
  }

  if (isLoaded) {
    content = (
      <div className="card pokemon-card mx-auto">
        <img
          className="card-img-top"
          src={data.sprites.front_default}
          alt={data.name}
        />
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              ID: <span className="font-weight-bold">{data.id}</span>
            </li>
            <li className="list-group-item">
              Height: <span className="font-weight-bold">{data.height}</span>
            </li>
            <li className="list-group-item">
              Weight: <span className="font-weight-bold">{data.weight}</span>
            </li>
          </ul>
          <button
            data-testid="remove-button"
            type="button"
            className="btn btn-secondary mt-4"
            onClick={onRemoveClick}
          >
            Remove
          </button>
        </div>
      </div>
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

export default Details;
