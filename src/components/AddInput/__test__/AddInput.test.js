import { fireEvent, render, screen } from "@testing-library/react";
jest.mock("uuid", () => ({
  v4: () => "test-id",
}));

import AddInput from "../AddInput";
// mocking funtion
const mockindTodos = jest.fn();

describe("AddInput", () => {
  it("should render the input element", () => {
    render(<AddInput todos={[]} setTodos={mockindTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should be able to change the input element value", () => {
    render(<AddInput todos={[]} setTodos={mockindTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, { target: { value: "learn react" } });
    expect(inputElement.value).toBe("learn react");
  });

  it("should empty an input element's value once the button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockindTodos} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(inputElement.value).toBe("");
  });
});
