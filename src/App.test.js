import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders the App component", () => {
  const { getByText } = render(<App />);
  expect(getByText(/Gift Card Generator/i)).toBeInTheDocument();
}); 
 