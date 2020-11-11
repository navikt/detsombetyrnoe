import { render, screen } from "@testing-library/react";
import React from "react";
import Legacy from "./static-with-positions/Legacy";

describe("tester legacy componenten", () => {
  test("komponenten rendrer uten å krasje", () => {
    render(<Legacy />);
    screen.getByText(/NAV skal utvikle verdens beste velferdsløsninger/i);
  });
});
