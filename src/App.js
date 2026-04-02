import logo from "./logo.svg";
import "./App.css";
import UserForm from "./form/CounterForm";
import { useState } from "react";
import Counter from "./counter/Counter";

function App() {
  const [inputValue, setInputValue] = useState(0);
  console.log(inputValue, " App.js");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserForm inputValue={inputValue} setInputValue={setInputValue} />
        <Counter startNumber={inputValue} />
      </header>
    </div>
  );
}

export default App;
