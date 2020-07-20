import axios from "axios";

const REQUEST = "pokedex/get-pokemon/request";
const SUCCESS = "pokedex/get-pokemon/sucess";
const FAILURE = "pokedex/get-pokemon/failure";

export const getPokemon = (name) => (dispatch) => {
  dispatch({
    type: REQUEST,
  });

  axios
    .get(`https:/pokeapi.co/api/v2/pokemon/${name}`)
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

const initialState = {
  loading: false,
  isLoaded: false,
  error: false,
  data: {},
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
        data: action.payload,
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

    default:
      return state;
  }
}
