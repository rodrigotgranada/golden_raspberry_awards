import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieByYear from "../components/Dashboard/MovieByYear";
import useGetData from "../hooks/useGetData";

jest.mock("../hooks/useGetData");

describe("MovieByYear component", () => {
  beforeEach(() => {
    useGetData.mockReturnValue({
      loading: false,
      data: null,
      error: null,
      getAllMovies: jest.fn(),
    });
  });

  it("renders the component correctly", () => {
    render(<MovieByYear />);
    expect(screen.getByText("List movie winners by year")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search by year")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("handles search correctly when a valid year is entered", async () => {
    const getAllMoviesMock = jest.fn().mockResolvedValue({ data: [] });
    useGetData.mockReturnValue({
      loading: false,
      data: null,
      error: null,
      getAllMovies: getAllMoviesMock,
    });

    render(<MovieByYear />);
    const searchInput = screen.getByPlaceholderText("Search by year");
    const searchButton = screen.getByRole("button");

    fireEvent.change(searchInput, { target: { value: "2021" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(getAllMoviesMock).toHaveBeenCalledWith(
        "https://tools.texoit.com/backend-java/api/movies?winner=true&year=2021"
      );
    });
  });

  it("does not call getAllMovies when an invalid year is entered", async () => {
    const getAllMoviesMock = jest.fn().mockResolvedValue({ data: [] });
    useGetData.mockReturnValue({
      loading: false,
      data: null,
      error: null,
      getAllMovies: getAllMoviesMock,
    });

    render(<MovieByYear />);
    const searchInput = screen.getByPlaceholderText("Search by year");
    const searchButton = screen.getByRole("button");

    fireEvent.change(searchInput, { target: { value: "abc" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      expect(getAllMoviesMock).not.toHaveBeenCalled();
    });
  });
});
