// Login.js

import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const { onAddLogin } = useContext(UserContext);
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

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center my-5 bg-[#414449] rounded-lg">
        <input
          type="text"
          className="outline-none border px-4 py-2"
          value={userInput}
          placeholder="login with your name"
          onChange={onChangeInput}
        />
        <button
          className="outline-none border-1 px-4 py-2 text-white font-bold hover:scale-95"
          onClick={onAddUserName}
        >
          Login 
        </button>
      </div>
    </div>
  );
};

export default Login;
