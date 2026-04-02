import logo from "./logo.svg";
import "./App.css";
import UserForm from "./form/UserForm";
import useCount from "./hooks/useCount";

function App() {
  const { count, decrement, increment } = useCount(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserForm />
        <div style={{ padding: "20px 0" }}>
          <button onClick={increment}>Increment</button>
          <h1>{count}</h1>
          <button onClick={decrement}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
