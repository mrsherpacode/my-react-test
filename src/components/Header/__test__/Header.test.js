import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("group", () => {
  // getby methods
  it("should  find the header in the component", () => {
    render(<Header title="Header" />);
    const header = screen.getByText(/Header/i);
    expect(header).toBeInTheDocument();
  });

  it("should pass", () => {
    render(<Header title="Header" />);
    const header = screen.getByRole("heading", { name: "Header" });
    expect(header).toBeInTheDocument();
  });

  it("should pass the test", () => {
    render(<Header title="Header" />);
    const header = screen.getByRole("heading", { name: "Header" });
    expect(header).toBeInTheDocument();
  });

  it("should render title", () => {
    render(<Header title="Header" />);
    const header = screen.getByTitle("heading");
    expect(header).toBeInTheDocument();
  });

  it("should render id", () => {
    render(<Header title="Header" />);
    const header = screen.getByTestId("heading-2");
    expect(header).toBeInTheDocument();
  });

  it("should render all the elements heading", () => {
    render(<Header title="Header" />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(2);
  });
  it("should title with findby method", async () => {
    render(<Header title="Header" />);
    const header = screen.queryByText(/list of header/i);
    expect(header).not.toBeInTheDocument();
  });
});
