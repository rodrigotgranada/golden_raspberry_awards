import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import YearMultipleWinners from "../components/Dashboard/YearMultipleWinners";
import useGetData from "../hooks/useGetData";

jest.mock("../hooks/useGetData");

describe("YearMultipleWinners component", () => {
  beforeEach(() => {
    useGetData.mockReturnValue({
      loading: false,
      data: {
        data: {
          years: [
            { year: 2020, winnerCount: 3 },
            { year: 2019, winnerCount: 2 },
            { year: 2018, winnerCount: 4 },
          ],
        },
      },
      error: null,
      getAllMovies: jest.fn(),
    });
  });

  it("renders the component correctly", () => {
    render(<YearMultipleWinners />);
    expect(
      screen.getByText("List Years with multiple winners")
    ).toBeInTheDocument();
    expect(screen.getByText("Year")).toBeInTheDocument();
    expect(screen.getByText("Win count")).toBeInTheDocument();
    expect(screen.getByText("2020")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("2019")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("2018")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("calls getAllMovies with the correct URL", async () => {
    const getAllMoviesMock = jest.fn();
    useGetData.mockReturnValue({
      loading: false,
      data: null,
      error: null,
      getAllMovies: getAllMoviesMock,
    });

    render(<YearMultipleWinners />);

    await waitFor(() => {
      expect(getAllMoviesMock).toHaveBeenCalledWith(
        "https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners"
      );
    });
  });

  it("displays an error message when there is an error", () => {
    useGetData.mockReturnValue({
      loading: false,
      data: null,
      error: "Server is down",
      getAllMovies: jest.fn(),
    });

    render(<YearMultipleWinners />);

    expect(screen.getByText("Servidor Fora do ar...")).toBeInTheDocument();
  });
});
