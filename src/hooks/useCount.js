import { useEffect, useState } from "react";

function useCount({ startNumber = 0 }) {
  const [count, setCount] = useState(startNumber);

  useEffect(() => {
    setCount(Number(startNumber));
  }, [startNumber]);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return { count, increment, decrement };
}

export default useCount;
