import { render, screen } from "@testing-library/react";
import Welcome from "./welcome";

describe("tester welcome componenten", () => {
  test("komponenten rendrer", () => {
    render(<Welcome />);
    expect(screen.getByText("Welcome to")).toBeInTheDocument();
  });
});
