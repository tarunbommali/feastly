import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = { userDetails: {}, counter: 0 };
    console.log("constructor called");
    this.timerId = null; // Define timerId as a property of the component
  }

  componentDidMount() {
    this.getProfileDetails();
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
      }));
    }, 1000);
    console.log("componentDidMount called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearInterval(this.timerId); // Use this.timerId to clear the interval
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
    const { userDetails, counter } = this.state;
    console.log(`render called ${counter}`);
    return (
      <div className="flex flex-col items-center py-3">
        <p>About</p>
        <div className="text-center">
          {userDetails && userDetails.login && (
            <div className="flex justify-center items-center flex-col">
              <img
                src={userDetails.avatar_url}
                alt="git-profile"
                className="self-center w-[220px] h-[220px] rounded-[50%] my-2 "
              />
              <h1>
                <a
                  href={userDetails.html_url}
                  target="__blank"
                  className="text-xl font-bold text-blue-400 hover:text-orange-400"
                >
                  {userDetails.login}
                </a>
              </h1>
            </div>
          )}
          <p>PUBLIC_REPO: {userDetails.public_repos}</p>
          <p>{userDetails.bio}</p>
          <p>counter: {counter}</p>
        </div>
      </div>
    );
  }
}
