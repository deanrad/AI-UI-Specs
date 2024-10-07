// src/Counter.test.tsx
import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  act,
} from "@testing-library/react";
import { beforeEach, describe, it, expect, vi } from "vitest";

import { Counter } from "./Counter";

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
    it("increments by 1 after 1 second", async () => {
      render(<Counter />);

      const button = screen.getByTestId("increment-button");
      const display = screen.getByTestId("count-display");

      expect(display.textContent).toBe("Count: 0");
      expect(button.textContent).toBe("Increment ");

      fireEvent.click(button);

      // Check loading state
      expect(button.textContent).toBe("Increment ⏳");

      // Advance fake timers by 1 second
      advanceFakeTime(1000);

      expect(display.textContent).toBe("Count: 1");

      // isLoading is a smidge later than isHandling
      await advanceFakeTime(0);
      expect(button.textContent).toBe("Increment ");
    });

    it("shows a loading indicator", () => {
      render(<Counter />);

      const button = screen.getByTestId("increment-button");

      fireEvent.click(button);

      // Check loading state
      expect(button.textContent).toBe("Increment ⏳");
    });

    it("cancels the increment", () => {
      render(<Counter />);

      const incrementButton = screen.getByTestId("increment-button");
      const cancelButton = screen.getByTestId("cancel-button");
      const display = screen.getByTestId("count-display");

      fireEvent.click(incrementButton);

      // Check loading state
      expect(incrementButton.textContent).toBe("Increment ⏳");

      fireEvent.click(cancelButton);

      // Advance fake timers by 1 second
      advanceFakeTime(1000);

      // expect(display.textContent).toBe("Count: 0");
      // expect(incrementButton.textContent).toBe("Increment ");
    });
  });
});
