import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopStudios from "../components/Dashboard/TopStudios";
import useGetData from "../hooks/useGetData";
import Loader from "../components/Others/Loader";
import { expect } from "@storybook/test";

jest.mock("../hooks/useGetData");

describe("TopStudios component", () => {
  beforeEach(() => {
    useGetData.mockReturnValue({
      loading: false,
      data: {
        data: {
          studios: [
            { name: "Studio 1", winCount: 10 },
            { name: "Studio 2", winCount: 8 },
            { name: "Studio 3", winCount: 6 },
          ],
        },
      },
      error: null,
      getAllMovies: jest.fn(),
    });
  });

  it("renders the component correctly", () => {
    render(<TopStudios />);
    expect(screen.getByText("Top 3 studios with winners")).toBeInTheDocument();
    expect(screen.getByText("Studio 1")).toBeInTheDocument();
    expect(screen.getByText("Studio 2")).toBeInTheDocument();
    expect(screen.getByText("Studio 3")).toBeInTheDocument();
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

    render(<TopStudios />);
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

    render(<TopStudios />);

    await waitFor(() => {
      expect(getAllMoviesMock).toHaveBeenCalledWith(
        "https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count"
      );
    });
  });
});
