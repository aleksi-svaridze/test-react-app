import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  it("Render Counter", () => {
    render(<Counter />);
    const countValue = screen.getByText(/Count to:/i);
    expect(countValue).toBeInTheDocument();
  });
});
