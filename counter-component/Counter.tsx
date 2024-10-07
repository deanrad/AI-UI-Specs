import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <p data-testid="count-display">Count: {count}</p>
      <button data-testid="increment-button" onClick={handleClick}>
        Increment{isLoading && " ⏳"}
      </button>
    </div>
  );
};

export default Counter;
