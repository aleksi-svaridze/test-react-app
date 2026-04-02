import { render, screen, fireEvent } from "@testing-library/react";
import CounterForm from "./CounterForm";

describe("UserForm", () => {
  test("renders input field", () => {
    render(<CounterForm setInputValue={jest.fn()} />);

    const input = screen.getByLabelText(/enter number/i);
    expect(input).toBeInTheDocument();
  });

  test("calls setInputValue with correct number", () => {
    const mockSetInputValue = jest.fn();

    render(<CounterForm setInputValue={mockSetInputValue} />);

    const input = screen.getByLabelText(/enter number/i);

    fireEvent.change(input, {
      target: { value: "7" },
    });

    expect(mockSetInputValue).toHaveBeenCalledWith(7);
  });

  test("calls setInputValue multiple times correctly", () => {
    const mockFn = jest.fn();

    render(<CounterForm setInputValue={mockFn} />);

    const input = screen.getByLabelText(/enter number/i);

    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.change(input, { target: { value: "10" } });

    expect(mockFn).toHaveBeenNthCalledWith(1, 3);
    expect(mockFn).toHaveBeenNthCalledWith(2, 10);
  });
});
