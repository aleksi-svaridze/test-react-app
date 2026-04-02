import { render, screen } from "@testing-library/react";
import CounterForm from "./CounterForm";

describe("UserForm", () => {
  it("renders input field", () => {
    render(<CounterForm />);

    const input = screen.getByLabelText(/enter number/i);
    expect(input).toBeInTheDocument();
  });
});
