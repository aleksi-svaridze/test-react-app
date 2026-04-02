import useCount from "../hooks/useCount";

function Counter({ startNumber }) {
  const { count, decrement, increment } = useCount({ startNumber });

  return (
    <div style={{ padding: "20px 0" }}>
      <button onClick={increment}>Increment</button>
      <h1>Count to: {count}</h1>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
