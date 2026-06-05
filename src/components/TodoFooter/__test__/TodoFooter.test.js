import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import TodoFooter from "../TodoFooter";
//  wrapping the Todofooter inside a BrowsreRouter because todofooter is using link
const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};
describe("TodoFooter", () => {
  it("should render the correct amount of incomplete tasks", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={3} />);
    const paraElements = screen.getByText(/3 tasks left/i);
    expect(paraElements).toBeInTheDocument();
  });

  it("should render 'task' if the number of incorrect task is one", () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const paraElements = screen.getByText(/1 task left/i);
    expect(paraElements).toBeInTheDocument();
    expect(paraElements).toBeVisible();
    expect(paraElements).toBeVisible();
    expect(paraElements).toBeTruthy();
    expect(paraElements.textContent).toBe("1 task left");
  });
});
