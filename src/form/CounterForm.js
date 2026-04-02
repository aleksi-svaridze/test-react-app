function CounterForm({ setInputValue }) {
  const handleInputValue = (e) => {
    setInputValue(Number(e.target.value));
  };

  return (
    <form style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label htmlFor="initialValue">Enter number:</label>
        <input type="number" id="initialValue" onChange={handleInputValue} />
      </div>
    </form>
  );
}

export default CounterForm;
