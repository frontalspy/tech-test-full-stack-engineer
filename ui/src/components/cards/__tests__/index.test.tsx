import React from "react";
import { render } from "@testing-library/react";
import { Card } from "..";
import "@testing-library/jest-dom";

describe("Card component", () => {
  it("renders children", () => {
    const { getByText } = render(
      <Card>
        <h2>Card Title</h2>
        <p>Card content goes here</p>
      </Card>
    );

    expect(getByText("Card Title")).toBeInTheDocument();
    expect(getByText("Card content goes here")).toBeInTheDocument();
  });
});
