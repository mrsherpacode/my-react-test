import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import FollowersList from "../FollowersList";
// it replaces the real axios module with a mock version during the test.
jest.mock("axios");
//is acting as a fake API response for axios.get
beforeEach(() => {
  axios.get.mockResolvedValue({
    data: {
      results: [
        // ✅ matches data.results in your component
        {
          name: { first: "John", last: "Doe" },
          picture: { large: "" },
          login: { username: "johndoe" },
        },
        {
          name: { first: "Jane", last: "Doe" },
          picture: { large: "" },
          login: { username: "janedoe" },
        },
        {
          name: { first: "Alice", last: "Smith" },
          picture: { large: "" },
          login: { username: "alice" },
        },
        {
          name: { first: "Bob", last: "Brown" },
          picture: { large: "" },
          login: { username: "bob" },
        },
        {
          name: { first: "Eve", last: "White" },
          picture: { large: "" },
          login: { username: "eve" },
        },
      ],
    },
  });
});

const MockingFollowers = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

// asynchronous testing
describe("Followers list", () => {
  //  some of useful hooks

  beforeEach(() => {
    console.log("run this line before each test ");
  });
  beforeAll(() => {
    console.log("run this line before all test ");
  });
  afterEach(() => {
    console.log("run this line after each test ");
  });

  afterAll(() => {
    console.log("run this line after all test ");
  });

  it("should render the follower", async () => {
    render(<MockingFollowers />);

    const followerList = await screen.findByTestId("follower-item-0");
    expect(followerList).toBeInTheDocument();
  });

  it("should render the multiple followers", async () => {
    render(<MockingFollowers />);
    const followerLists = await screen.findAllByTestId(/follower-item/i);
    expect(followerLists.length).toBe(5);
  });
});
