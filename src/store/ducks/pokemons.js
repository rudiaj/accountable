import axios from "axios";
import { shuffle } from "lodash";

const REQUEST = "pokedex/get-pokemons/request";
const SUCCESS = "pokedex/get-pokemons/sucess";
const FAILURE = "pokedex/get-pokemons/failure";
const REMOVE = "pokedex/pokemons/remove-single";
const SHUFFLE = "pokedex/pokemons/shuffle";

export const getPokemons = (url = "https:/pokeapi.co/api/v2/pokemon/") => (
  dispatch
) => {
  dispatch({
    type: REQUEST,
  });

  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: FAILURE,
      });
    });
};

export const remove = (name) => (dispatch) => {
  dispatch({
    type: REMOVE,
    payload: name,
  });
};

export const shufflePokemons = () => (dispatch) => {
  dispatch({
    type: SHUFFLE,
  });
};

const initialState = {
  loading: false,
  isLoaded: false,
  error: false,
  data: [],
  next: null,
  previous: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
        isLoaded: false,
        error: false,
      };
    case SUCCESS:
      return {
        data: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous,
        error: false,
        loading: false,
        isLoaded: true,
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        isLoaded: false,
      };
    case REMOVE:
      return {
        ...state,
        data: state.data.filter((pokemon) => pokemon.name !== action.payload),
      };
    case SHUFFLE:
      return {
        ...state,
        data: shuffle(state.data),
      };

    default:
      return state;
  }
}
