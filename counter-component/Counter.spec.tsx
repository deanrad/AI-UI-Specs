// src/Counter.test.tsx
import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  cleanup,
} from "@testing-library/react";
import { beforeEach, describe, it, expect, vi } from "vitest";
import Counter from "./Counter";

vi.useFakeTimers();

const advanceFakeTime = (ms: number) => {
  return act(() => {
    vi.advanceTimersByTime(ms);
  });
};

describe("Counter Component", () => {
  beforeEach(() => {
    cleanup();
  });

  describe("Single Click", () => {
    it("increments by 1 after 1 second", () => {
      render(<Counter />);

      const button = screen.getByTestId("increment-button");
      const display = screen.getByTestId("count-display");

      expect(display.textContent).toBe("Count: 0");

      fireEvent.click(button);

      // Wait for 1 second
      advanceFakeTime(1000);

      expect(display.textContent).toBe("Count: 1");
    });

    it("shows a loading indicator", () => {
      render(<Counter />);

      const button = screen.getByTestId("increment-button");

      expect(button.textContent).toBe("Increment");

      fireEvent.click(button);

      // Check loading state
      expect(button.textContent).toBe("Increment ⏳");

      // Wait for 1 second
      advanceFakeTime(1000);

      expect(button.textContent).toBe("Increment");
    });
  });
});
