import React from "react";
import { render } from "@testing-library/react";

import Details from "./Details";

it("renders correctly", () => {
  const { getByTestId } = render(<Details />);
  expect(getByTestId("remove-button")).toHaveTextContent();
});
