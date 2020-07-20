import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { getPokemons } from "../store/ducks/pokemons";

const Pagination = () => {
  const dispatch = useDispatch();
  const { next, previous } = useSelector((state) => state.pokemons);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li
          data-testid="prev-link"
          className={cn("page-item", { disabled: previous === null })}
        >
          <button
            data-testid="prev-button"
            type="button"
            className="page-link"
            onClick={() => {
              dispatch(getPokemons(previous));
            }}
          >
            Previous
          </button>
        </li>
        <li className={cn("page-item", { disabled: next === null })}>
          <button
            data-testid="next-button"
            type="button"
            className="page-link"
            onClick={() => {
              dispatch(getPokemons(next));
            }}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
