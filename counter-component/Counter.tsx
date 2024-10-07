import { after, createService, useService } from "@rxfx/react";
import React from "react";

export const countEffect = createService<void, void, void, number>(
  "count",
  // TODO - allow for test to vary the speed - mockable function?
  () => after(1000),
  ({ isResponse }) =>
    (count = 0, evt) => {
      return isResponse(evt) ? count + 1 : count;
    }
);

export const Counter = () => {
  const { isActive: isLoading, state: count } = useService(countEffect);

  const handleClick = () => {
    countEffect();
  };

  const handleCancel = () => {
    countEffect.cancelCurrent();
  };

  return (
    <div>
      <p data-testid="count-display">Count: {count}</p>
      <button data-testid="increment-button" onClick={handleClick}>
        Increment {isLoading && "⏳"}
      </button>
      <button
        data-testid="cancel-button"
        onClick={handleCancel}
        disabled={!isLoading}
      >
        Cancel
      </button>
    </div>
  );
};

export default Counter;
