import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ListItem from "./ListItem";

describe("ListItem", () => {
  it("renders correctly", () => {
    const { queryByText } = render(
      <MemoryRouter>
        <ListItem item={{ name: "pikachu" }} />
      </MemoryRouter>
    );

    expect(queryByText("pikachu")).toHaveTextContent("pikachu");
  });
});
