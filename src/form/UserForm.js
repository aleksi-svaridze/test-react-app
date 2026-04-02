function UserForm() {
  return (
    <form style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label htmlFor="userName">Name:</label>
        <input type="text" id="userName" />
        <button>Submit</button>
      </div>
    </form>
  );
}

export default UserForm;
