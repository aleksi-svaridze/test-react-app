import { render, screen } from "@testing-library/react";
import UserForm from "./UserForm";

describe("Form", () => {
  it("Renders Input", () => {
    render(<UserForm />);
    const inputRole = screen.getByRole("textbox");
    expect(inputRole).toBeInTheDocument();
  });

  it("Renders Label", () => {
    render(<UserForm />);
    const labelText = screen.getByText(/name/i);
    expect(labelText).toBeInTheDocument();
  });

  it("Renders button", () => {
    render(<UserForm />);
    const buttonRole = screen.getByRole("button");
    expect(buttonRole).toBeInTheDocument();
  });
});
