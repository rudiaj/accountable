/* eslint-disable import/first */
jest.mock("../store/ducks/pokemons", () => ({
  getPokemons: jest.fn((state) => ({
    type: "PAGINATION_TEST",
    payload: { state },
  })),
}));

import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { getPokemons } from "../store/ducks/pokemons";
import Pagination from "./Pagination";

const mockStore = configureStore();

const renderComponent = (store) => {
  return render(
    <Provider store={store}>
      <Pagination />
    </Provider>
  );
};

describe("Pagination", () => {
  it("it should trigger getPokemons on previous", () => {
    const store = mockStore({
      pokemons: {
        previous: null,
      },
    });

    const { getByTestId } = renderComponent(store);

    getByTestId("prev-button").click();
    expect(getPokemons).toHaveBeenCalled();
  });

  it("it should trigger getPokemons on next", () => {
    const store = mockStore({
      pokemons: {
        previous: null,
      },
    });

    const { getByTestId } = renderComponent(store);

    getByTestId("next-button").click();
    expect(getPokemons).toHaveBeenCalled();
  });

  it("it should be disabled", () => {
    const store = mockStore({
      pokemons: {
        previous: null,
      },
    });

    const { getByTestId } = renderComponent(store);

    expect(getByTestId("prev-link").classList.contains("disabled")).toBe(true);
  });

  it("it should not be disabled", () => {
    const store = mockStore({
      pokemons: {
        previous: "www.google.com",
      },
    });

    const { getByTestId } = renderComponent(store);

    expect(getByTestId("prev-link").classList.contains("disabled")).toBe(false);
  });
});
