// src/Counter.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Counter from "./Counter";

describe("Counter Component", () => {
  it("should increment count by 1 after 1 second when button is clicked", async () => {
    render(<Counter />);

    const button = screen.getByTestId("increment-button");
    const display = screen.getByTestId("count-display");

    expect(display.textContent).toBe("Count: 0");

    fireEvent.click(button);

    // Wait for 1 second
    await new Promise((r) => setTimeout(r, 1000));

    expect(display.textContent).toBe("Count: 1");
  });
});
