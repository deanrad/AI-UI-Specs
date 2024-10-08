import React from "react";
import { useService } from "@rxfx/react";
import { countService } from "./counter.service";

export const Counter = () => {
  const { isActive: isLoading, state: count } = useService(countService);

  const handleClick = () => {
    countService();
  };

  const handleCancel = () => {
    countService.cancelCurrent();
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
