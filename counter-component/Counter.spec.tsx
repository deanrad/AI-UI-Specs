// src/Counter.test.tsx
import React from "react";
import {
  render,
  screen,
  fireEvent,
  cleanup,
  act,
} from "@testing-library/react";
import { after } from "@rxfx/after";
import { beforeEach, describe, it, expect, vi } from "vitest";

import { Counter } from "./Counter";
import * as CounterEffect from "./counter.effect";
const { REQ_TIME } = CounterEffect;
import { countService } from "./counter.service";

vi.useFakeTimers();

const advanceFakeTime = (ms: number) => {
  return act(() => {
    vi.advanceTimersByTime(ms);
  });
};

describe("Counter Component", () => {
  beforeEach(() => {
    countService.reset();
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
      advanceFakeTime(REQ_TIME);

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

    it("cancels the increment", async () => {
      render(<Counter />);

      const incrementButton = screen.getByTestId("increment-button");
      const cancelButton = screen.getByTestId("cancel-button");
      const display = screen.getByTestId("count-display");

      expect(display.textContent).toBe("Count: 0");
      fireEvent.click(incrementButton);

      // Check loading state
      expect(incrementButton.textContent).toBe("Increment ⏳");

      await advanceFakeTime(0.5 * REQ_TIME);
      fireEvent.click(cancelButton);

      // Advance fake timers by 1 second
      await advanceFakeTime(REQ_TIME);

      expect(display.textContent).toBe("Count: 0");
      expect(incrementButton.textContent).toBe("Increment ");
    });
  });
});
