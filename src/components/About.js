import React, { Component } from "react";
import { IoMdOpen } from "react-icons/io";

import UserContext from "../context/UserContext";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { userDetails: {} };
    this.timerId = null; // Define timerId as a property of the component
  }

  componentDidMount() {
    this.getProfileDetails();
  }

  // Using an arrow function to define the method to maintain the correct context
  getProfileDetails = async () => {
    try {
      const url = "https://api.github.com/users/tarunbommali";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ userDetails: data });
    } catch (error) {
      console.error("Error fetching profile details:", error);
    }
  };

  render() {
    const { userDetails } = this.state;

    return (
      <div className="flex flex-col items-center py-3">
        <p>About</p>
        <div className="flex shadow-md px-5 py-2 rounded-sm ">
          <UserContext.Consumer>
            {({ loggedInUser }) => {
              return (
                <h1 className="text-2xl font-bold">
                  LoggedIn User : {loggedInUser}
                </h1>
              );
            }}
          </UserContext.Consumer>
        </div>

        <div className="text-center my-3 w-[90%] shadow-md rounded-lg px-5 lg:w-[70%] ">
          {userDetails && userDetails.login && (
            <div className="flex  flex-col p-5 justify-center items-center lg:flex flex-row">
              <img
                src={userDetails.avatar_url}
                alt="git-profile"
                className="self-center w-[220px] h-[220px] rounded-[50%] my-2 hover:scale-105 "
              />
              <div>
                <h1>
                  <a
                    href={userDetails.html_url}
                    target="__blank"
                    className="text-xl font-bold text-[#004097] hover:text-orange-400"
                  >
                    {userDetails.login}
                  </a>
                </h1>
                <p>PUBLIC_REPO: {userDetails.public_repos}</p>
                <p>{userDetails.bio}</p>
                <p>
                  Devloped by{" "}
                  <a
                    className="mt-5 underline text-[#004097] hover:text-orange-400"
                    target="__blank"
                    href="https://www.instagram.com/disistarun/"
                  >
                    Tarun
                  </a>
                  ! No Copyrights.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
