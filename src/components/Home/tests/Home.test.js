import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../Home";
import { QueryClient, QueryClientProvider } from "react-query";

test("check input inside Home", () => {
  render(<Home />);
  const inputCity = screen.getByPlaceholderText(/enter a city/i);
  expect(inputCity).toBeInTheDocument();
});

test("show result when click searchBtn", async () => {
  const queryClient = new QueryClient();
  // render Home wrapped by QueryClientProvider
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );

  // get inputCity and enter a city
  const inputCity = screen.getByPlaceholderText(/enter a city/i);
  userEvent.type(inputCity, "rome");

  // get searchBtn and click it
  const searchBtn = screen.getByRole("button", { name: /search/i });
  userEvent.click(searchBtn);

  // check display result on screen
  const temperature = await screen.findByText(/temp:/i, {
    exact: false,
  });
  expect(temperature).toBeInTheDocument();
});
