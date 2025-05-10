import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const { onAddLogin, loggedInUser } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");

  const onChangeInput = (e) => {
    setUserInput(e.target.value);
  };

  const onAddUserName = () => {
    const formattedUserInput =
      userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    onAddLogin(formattedUserInput);
    setUserInput("");
  };

  const onLogout = () => {
    onAddLogin("Developer");
  };

  return (
    <div className="flex flex-col items-center">
      {loggedInUser === "Developer" ? (
        <div className="flex items-center my-5 bg-[#414449] rounded-lg">
          <input
            type="text"
            className="outline-none border px-4 py-2"
            value={userInput}
            placeholder="Login with your name"
            onChange={onChangeInput}
          />
          <button
            className="outline-none border-1 px-4 py-2 text-white font-bold hover:scale-95"
            onClick={onAddUserName}
          >
            Login
          </button>
        </div>
      ) : (
        <div className="flex justify-center h-full items-center flex-col  py-4">
          <h1 className="text-xl font-thin py-4">Your logged in as <span className="font-semibold"> {loggedInUser}</span></h1>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={onLogout}
          >
            Logout to remove username
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
