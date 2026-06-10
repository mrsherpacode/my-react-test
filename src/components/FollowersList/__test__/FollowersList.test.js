import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import FollowersList from "../FollowersList";

jest.mock("axios");

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
