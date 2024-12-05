import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardPrev from "../CardPrev";

beforeAll(() => {
  global.IntersectionObserver = class {
    constructor(callback) {
      this.callback = callback;
    }

    observe() {}
    unobserve() {}
    disconnect() {}
  };
});

test("renders CardPrev with props", () => {
  const dataExample = {
    dear: "John",
    message: "Happy Birthday!",
    from: "Alice",
  };

  const { getByText } = render(<CardPrev cardData={dataExample} />);

  expect(getByText(/Dear John/i)).toBeInTheDocument();
  expect(getByText(/Happy Birthday!/i)).toBeInTheDocument();
});
