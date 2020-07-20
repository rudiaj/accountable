import thunk from "redux-thunk";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import ducks from "./ducks";

const reducer = combineReducers({
  ...ducks,
});

export default createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
