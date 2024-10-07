// src/Counter.test.tsx
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Counter from "./Counter";
import { after } from "@rxfx/after";

vi.useFakeTimers();

const advanceFakeTime = (ms: number) => {
  return act(() => {
    vi.advanceTimersByTime(ms);
  });
};

describe("Counter Component", () => {
  it("should increment count by 1 after 1 second when button is clicked", () => {
    render(<Counter />);

    const button = screen.getByTestId("increment-button");
    const display = screen.getByTestId("count-display");

    expect(display.textContent).toBe("Count: 0");

    fireEvent.click(button);

    // Wait for 1 second
    advanceFakeTime(1000);

    expect(display.textContent).toBe("Count: 1");
  });
});
