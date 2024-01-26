import { render, screen } from "@testing-library/react";
import Header from "../components/Home/Header";

const sum = (x, y) => {
  return x + y;
};

describe("Header Component", () => {
  it("Should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("Should render Header with Frontend React Test", () => {
    render(<Header />);

    screen.getByText("Frontend React Test");
  });
});
