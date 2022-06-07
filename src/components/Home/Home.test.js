import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

test("check input inside Home", () => {
  render(<Home />);
  const inputCity = screen.getByPlaceholderText(/enter a city/i);
  expect(inputCity).toBeInTheDocument();
});

test("show result when click searchBtn", async () => {
  render(<Home />);

  // get inputCity and enter a city
  const inputCity = screen.getByPlaceholderText(/enter a city/i);
  userEvent.type(inputCity, "london");

  // get searchBtn and click it
  const searchBtn = screen.getByRole("button", { name: /search/i });
  userEvent.click(searchBtn);

  // check display result on screen
  const loading = screen.getByText(/loading.../i, {
    exact: false,
  });
  expect(loading).toBeInTheDocument();
});
