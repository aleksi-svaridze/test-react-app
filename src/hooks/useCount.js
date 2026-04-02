import { useState } from "react";

function useCount(startNumber = 0) {
  const [count, setCount] = useState(startNumber);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return { count, increment, decrement };
}

export default useCount;
