import { useState, useContext } from "react";
import { LOGO_IMG_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserLoggedIn from "../context/UserContext";
const Header = () => {

  const location = useLocation() 
  const {pathname} = location;


  const {loggedInUser} = useContext(UserLoggedIn)  
  
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between px-5 py-1 shadow-md">
      <Link to="/" className="flex items-center">
        <img src={LOGO_IMG_URL} alt="logo" className="w-[72px] h-[72px]  p-3" />
        <h1 className="font-bold text-3xl text-[#00a6ed]">Feastly</h1>
      </Link>

      <ul className="flex items-center text-lg font-semibold">
        <li className="px-5">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
        <li className="px-5">
        <Link to="/" className={`${pathname==='/' && "underline"}`}>
          Home
        </Link>
      </li>
      <li className="px-5">
        <Link to="/instamart" className={`${pathname==='/instamart' && "underline"}`}>
          Instamart
        </Link>
      </li>
      <li className="px-5">
        <Link to="/cart" className={`${pathname==='/cart' && "underline"}`}>
          Cart
        </Link>
      </li>
      <li className="px-5">
        <Link to="/about" className={`${pathname==='/about' && "underline"}`}>
          About
        </Link>
      </li>
      <li className="px-5">
        <Link to="/login" className={`${pathname==='/login' && "underline"}`}>
          Login
        </Link>
      </li> <li className="px-5">
          {loggedInUser}
        </li>
        {/* <li><button className="login-btn"  onClick={() => {setIsLogin(!isLogin)}}>{isLogin ? "Sign In" : "Sign Out"}</button></li> */}
      </ul>
    </div>
  );
};

export default Header;
