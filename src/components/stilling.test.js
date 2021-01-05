import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Stilling from "./stilling";

const stillingDummy = {
  frist: "18. november 2021",
  url: "https://detsombetyrnoe.no",
  title: "Kom til oss, vi har cookies",
  description: "omnomomnomomnom",
};

describe("Tester komponenten Stilling", () => {
  test("Komponenten rendrer ikke uten url", () => {
    const { container } = render(<Stilling />);
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten rendrer som forventet", () => {
    const mockLogAmplitudeEvent = jest.fn();
    const { container } = render(<Stilling {...stillingDummy} logAmplitudeEvent={mockLogAmplitudeEvent} />);
    expect(container).not.toBeEmptyDOMElement();
    expect(screen.getByText(/18\. november 2021/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/kom til oss, vi har cookies/i).length).toBe(2);
    expect(screen.getByText(stillingDummy.description)).toBeInTheDocument();
  });

  test("Når vi velger les mer trigges logAmplitudeEvent", () => {
    const mockWindowNavigate = jest.fn();
    const mockLogAmplitudeEvent = jest.fn();
    delete window.location;
    render(<Stilling {...stillingDummy} logAmplitudeEvent={mockLogAmplitudeEvent} />);
    const lenke = screen.queryAllByText(/kom til oss, vi har cookies/i)[1];
    window.location = {
      assign: mockWindowNavigate,
    };
    userEvent.click(lenke);
    expect(mockLogAmplitudeEvent).toHaveBeenCalledTimes(1);
    expect(mockWindowNavigate).toHaveBeenCalledTimes(1);
  });
});
