import React, { Component } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { connect } from "react-redux";
import { fetchUserDetails } from "../redux-store/userSlice";
import UserContext from "../context/UserContext";
import AboutMeShimmer from "./AboutMeShimmer.js";
import AboutProject from "./AboutProject.js";
import { Link, useParams } from "react-router-dom";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: props.initialTab || "profile",
    };
  }

  componentDidMount() {
    this.props.fetchUserDetails();
  }

  // AboutMe Component
  AboutMe = () => {
    const { userDetails, loading, error } = this.props;

    return (
      <div>
        {loading ? (
          <div className="flex justify-center w-full">
            <AboutMeShimmer />
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : userDetails?.login ? (
          <div className="flex justify-center items-center flex-col lg:flex-row">
            <img
              src={userDetails.avatar_url}
              alt="git-profile"
              className="w-[220px] h-[220px] rounded-full my-2 hover:scale-105"
            />
            <div className="lg:ml-5 text-left">
              <a
                href={userDetails.html_url}
                target="__blank"
                className="text-xl font-bold text-[#004097] hover:text-orange-400"
              >
                {userDetails.login}
              </a>
              <p>PUBLIC_REPO: {userDetails.public_repos}</p>
              <p className="w-[60%]">{userDetails.bio}</p>
            </div>
            <div className="flex flex-col justify-center gap-5 pt-5 font-bold text-lg pb-5">
              <a
                href="https://www.linkedin.com/in/tarunbommali/"
                target="__blank"
              >
                <FaLinkedin className="text-4xl hover:scale-105 text-[#0a66c2]" />
              </a>
              <a href="https://www.instagram.com/disistarun/" target="__blank">
                <GrInstagram className="text-4xl text-[#fe326e] hover:scale-105" />
              </a>
              <a href="https://github.com/tarunbommali" target="__blank">
                <FaGithub className="text-4xl text-[#1f2328] hover:scale-105" />
              </a>
            </div>
          </div>
        ) : null}
      </div>
    );
  };

  Profile = () => {
    return (
      <div className="flex">
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="text-2xl font-thin mb-4">
              LoggedIn User: {loggedInUser}
            </h1>
          )}
        </UserContext.Consumer>
      </div>
    );
  };

  tabList = [
    {
      tabId: "profile",
      label: "Profile",
      component: this.Profile,
    },
    {
      tabId: "aboutProject",
      label: "Project Details",
      component: AboutProject,
    },
    { tabId: "aboutMe", label: "About Me", component: this.AboutMe },
  ];

  render() {
    const { activeTab } = this.state;
    const ActiveComponent = this.tabList.find(
      (tab) => tab.tabId === activeTab
    )?.component;

    return (
      <div className="flex flex-col items-center gap-4 py-3">
        <ul className="flex gap-4 w-[85%] mb-4">
          {this.tabList.map((item) => (
            <li key={item.tabId}>
              <Link
                to={`/about/${item.tabId}`}  // Link to the correct tab
                className={`cursor-pointer px-3 py-1 rounded ${
                  activeTab === item.tabId
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
                onClick={() => this.setState({ activeTab: item.tabId })}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex w-[85%]">
          {ActiveComponent && <ActiveComponent />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.user.userDetails,
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatchToProps = {
  fetchUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
