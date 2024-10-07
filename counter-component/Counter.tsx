import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setIsCancelled(false);
    setTimeout(() => {
      if (!isCancelled) {
        setCount((prevCount) => prevCount + 1);
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleCancel = () => {
    setIsCancelled(true);
    setIsLoading(false);
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
