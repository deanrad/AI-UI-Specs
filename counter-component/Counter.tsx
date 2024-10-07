import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  return (
    <div>
      <p data-testid="count-display">Count: {count}</p>
      <button data-testid="increment-button" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
