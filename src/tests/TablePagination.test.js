import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TablePagination from "../components/List/TablePagination";

describe("TablePagination component", () => {
  const columns = [
    { Header: "ID", accessor: "id" },
    { Header: "Year", accessor: "year" },
    { Header: "Title", accessor: "title" },
    { Header: "Winner?", accessor: "winner" },
  ];

  const data = [
    { id: 1, year: 2020, title: "Movie 1", winner: true },
    { id: 2, year: 2021, title: "Movie 2", winner: false },
  ];

  const isLoading = false;

  const footer = {
    totalRows: 10,
    pageChangeHandler: jest.fn(),
    rowsPerPage: 5,
    currentPage: 1,
  };

  it("renders the table headers correctly", () => {
    render(
      <TablePagination
        columns={columns}
        data={data}
        isLoading={isLoading}
        footer={footer}
      />
    );

    const idHeader = screen.getByText("ID");
    expect(idHeader).toBeInTheDocument();

    const yearHeader = screen.getByText("Year");
    expect(yearHeader).toBeInTheDocument();

    const titleHeader = screen.getByText("Title");
    expect(titleHeader).toBeInTheDocument();

    const winnerHeader = screen.getByText("Winner?");
    expect(winnerHeader).toBeInTheDocument();
  });

  it("renders the table rows correctly", () => {
    render(
      <TablePagination
        columns={columns}
        data={data}
        isLoading={isLoading}
        footer={footer}
      />
    );

    const row1 = screen.getByText("Movie 1");
    expect(row1).toBeInTheDocument();

    const row2 = screen.getByText("Movie 2");
    expect(row2).toBeInTheDocument();
  });
});
