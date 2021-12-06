/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Stilling from "./stilling";
import { AmplitudeProvider } from "../contexts/amplitude-context";
import { mockIntersectionObserver } from "../mocks/intersection-observer-mock";

const stillingDummy = {
  frist: "18. november 2021",
  url: "https://detsombetyrnoe.no",
  title: "Kom til oss, vi har cookies",
  description: "omnomomnomomnom",
};

describe("Tester komponenten Stilling", () => {
  beforeEach(() => {
    mockIntersectionObserver();
  });

  test("Komponenten rendrer ikke uten url", () => {
    const { container } = render(
      <AmplitudeProvider>
        <Stilling />
      </AmplitudeProvider>
    );
    expect(container).toBeEmptyDOMElement();
  });

  test("Komponenten rendrer som forventet", () => {
    const mockLogAmplitudeEvent = jest.fn();
    const { container } = render(
      <AmplitudeProvider>
        <Stilling {...stillingDummy} logAmplitudeEvent={mockLogAmplitudeEvent} />
      </AmplitudeProvider>
    );
    expect(container).not.toBeEmptyDOMElement();
    expect(screen.getByText(/18\. november 2021/i)).toBeInTheDocument();
    expect(screen.queryAllByText(/kom til oss, vi har cookies/i).length).toBe(1);
    expect(screen.getByText(stillingDummy.description)).toBeInTheDocument();
  });
});
