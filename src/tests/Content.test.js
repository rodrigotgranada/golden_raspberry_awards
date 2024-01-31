import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Content from "../components/List/Content";

describe("Content component", () => {
  it("renders the table headers correctly", () => {
    render(<Content />);

    const idHeader = screen.getByText("ID");
    expect(idHeader).toBeInTheDocument();

    const yearHeader = screen.getByText("Year");
    expect(yearHeader).toBeInTheDocument();

    const titleHeader = screen.getByText("Title");
    expect(titleHeader).toBeInTheDocument();

    const winnerHeader = screen.getByText("Winner?");
    expect(winnerHeader).toBeInTheDocument();
  });

  it("renders the filter by year input correctly", () => {
    render(<Content />);

    const yearInput = screen.getByPlaceholderText("Filter by year");
    expect(yearInput).toBeInTheDocument();
  });

  it("renders the filter by winner select correctly", () => {
    render(<Content />);

    const winnerSelect = screen.getByDisplayValue("Yes/No");
    expect(winnerSelect).toBeInTheDocument();
  });
});
