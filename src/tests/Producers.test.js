import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Producers from "../components/Dashboard/Producers";
import useGetData from "../hooks/useGetData";
import Loader from "../components/Others/Loader";

jest.mock("../hooks/useGetData");

describe("Producers component", () => {
  beforeEach(() => {
    useGetData.mockReturnValue({
      loading: false,
      data: {
        data: {
          max: [
            {
              producer: "Producer 1",
              interval: 10,
              previousWin: 2000,
              followingWin: 2010,
            },
          ],
          min: [
            {
              producer: "Producer 2",
              interval: 5,
              previousWin: 2015,
              followingWin: 2020,
            },
          ],
        },
      },
      error: null,
      getAllMovies: jest.fn(),
    });
  });

  it("renders the component correctly", () => {
    render(<Producers />);
    expect(
      screen.getByText(
        "Producers with longest and shortest interval between wins"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Maximum")).toBeInTheDocument();
    expect(screen.getByText("Minimum")).toBeInTheDocument();
    expect(screen.getByText("Producer 1")).toBeInTheDocument();
    expect(screen.getByText("Producer 2")).toBeInTheDocument();
  });

  it("displays loading state while fetching data", async () => {
    useGetData.mockReturnValue({
      loading: true,
      data: null,
      error: null,
      getAllMovies: jest.fn(),
    });

    const { getByAltText } = await render(<Loader />);
    const loader = screen.getByAltText("Loader");
    expect(loader).toHaveAttribute("alt", "Loader");
  });

  it("displays error message when there is an error", () => {
    useGetData.mockReturnValue({
      loading: false,
      data: null,
      error: "Server is down",
      getAllMovies: jest.fn(),
    });

    render(<Producers />);
    expect(screen.getByText("Servidor Fora do ar...")).toBeInTheDocument();
  });

  it("calls getAllMovies with the correct URL", async () => {
    const getAllMoviesMock = jest.fn();
    useGetData.mockReturnValue({
      loading: false,
      data: null,
      error: null,
      getAllMovies: getAllMoviesMock,
    });

    render(<Producers />);
    await waitFor(() => {
      expect(getAllMoviesMock).toHaveBeenCalledWith(
        "https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers"
      );
    });
  });
});
