import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardForm from "../CardForm";
import "@testing-library/jest-dom";

test("renders form inputs and submit button", () => {
  render(<CardForm />);

  expect(screen.getByLabelText(/Dear/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/From/i)).toBeInTheDocument();
  expect(screen.getByText(/Generate Card/i)).toBeInTheDocument();
});

test("shows validation errors for empty fields", async () => {
  render(<CardForm />);

  fireEvent.click(screen.getByText(/Generate Card/i));

  expect(
    await screen.findByText(/Dear field is required/i)
  ).toBeInTheDocument();
  expect(await screen.findByText(/Message is required/i)).toBeInTheDocument();
  expect(
    await screen.findByText(/From field is required/i)
  ).toBeInTheDocument();
});
