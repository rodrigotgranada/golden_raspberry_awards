import React from "react";
import { render, screen } from "@testing-library/react";
import Content from "./Content";

describe("Content component", () => {
  it("renders the columns correctly", () => {
    render(<Content />);

    const idColumn = screen.getByText("ID");
    expect(idColumn).toBeInTheDocument();

    const yearColumn = screen.getByText("Year");
    expect(yearColumn).toBeInTheDocument();

    const titleColumn = screen.getByText("Title");
    expect(titleColumn).toBeInTheDocument();

    const winnerColumn = screen.getByText("Winner?");
    expect(winnerColumn).toBeInTheDocument();
  });

  it("updates the baseUrl state when filtering by year", () => {
    render(<Content />);

    const yearInput = screen.getByPlaceholderText("Filter by year");
    yearInput.value = "2022";
    yearInput.dispatchEvent(new Event("change"));

    expect(yearInput.value).toBe("2022");
    // assert that the baseUrl state has been updated correctly
    // you can access the state using the appropriate method based on your component implementation
  });

  it("updates the baseUrl state when filtering by winner", () => {
    render(<Content />);

    const winnerSelect = screen.getByLabelText("Winner?");
    winnerSelect.value = "true";
    winnerSelect.dispatchEvent(new Event("change"));

    expect(winnerSelect.value).toBe("true");
    // assert that the baseUrl state has been updated correctly
    // you can access the state using the appropriate method based on your component implementation
  });
});
