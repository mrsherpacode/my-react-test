import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

jest.mock("uuid", () => ({
  v4: () => "test-id",
}));

import Todo from "../Todo";
// Integration testing

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};
// reuseable function
const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const button = screen.getByRole("button", { name: "Add" });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(button);
  });
};
describe("Todo", () => {
  it("should render the same input element in the list the component", () => {
    render(<MockTodo />);
    addTask(["learn-react"]);
    const divElement = screen.getByText(/learn-react/i);
    expect(divElement).toBeInTheDocument();
  });

  it("should render the multiple input elements in the list the component", () => {
    render(<MockTodo />);
    addTask(["learn-react", "learn-js", "master-react"]);
    const divElements = screen.getAllByTestId("task-container");
    expect(divElements.length).toBe(3);
  });

  it("should not have render class todo-item-active", () => {
    render(<MockTodo />);
    addTask(["learn-react"]);
    const divElement = screen.getByText(/learn-react/i);
    expect(divElement).not.toHaveClass("todo-item-active");
  });

  it("should  have  class todo-item-active when the button is clicked", () => {
    render(<MockTodo />);
    addTask(["learn-react"]);
    const divElement = screen.getByText(/learn-react/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
