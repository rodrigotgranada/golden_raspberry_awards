import React from "react";
import { queryByTestId, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "../components/Others/Table";

describe("Table component", () => {
  const titles = ["Title 1", "Title 2", "Title 3"];
  const items = ["item1", "item2", "item3"];
  const isLoading = false;
  const data = [
    { item1: "Value 1", item2: "Value 2", item3: "Value 3" },
    { item1: "Value 4", item2: "Value 5", item3: "Value 6" },
  ];

  it("renders table with titles and data", () => {
    const { getByText } = render(
      <Table titles={titles} items={items} isLoading={isLoading} data={data} />
    );

    // Check if table headers are rendered
    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    // Check if table data is rendered
    data.forEach((resultado) => {
      items.forEach((item) => {
        expect(screen.getByText(resultado[item])).toBeInTheDocument();
      });
    });
  });
});
