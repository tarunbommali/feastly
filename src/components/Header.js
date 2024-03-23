import { useState } from "react";
import { LOGO_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
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
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="px-5">
          <Link to="/instamart" className="nav-link">
            Instamart
          </Link>
        </li>

        <li className="px-5">
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
        <li className="px-5">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="px-5">
          <Link to="/Login" className="nav-link">
            Login
          </Link>
        </li>
        {/* <li><button className="login-btn"  onClick={() => {setIsLogin(!isLogin)}}>{isLogin ? "Sign In" : "Sign Out"}</button></li> */}
      </ul>
    </div>
  );
};

export default Header;
