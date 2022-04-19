import { screen, render } from "@testing-library/react";
import Home from "../Home";

test("check input inside Home", () => {
  render(<Home />);

  const inputCity = screen.getByPlaceholderText(/enter a city/i);
  expect(inputCity).toBeInTheDocument();
});
