import { LOGO_IMG_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import UserLoggedIn from "../context/UserContext";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useClickAway } from "react-use";
import { useRef, useState, useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";


const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  // subscribing to the store using selector f
  const cartItems = useSelector((store) => store.cart.items); 

  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const handleCloseMenu = () => {
    setOpen(false);
  };

  const { loggedInUser } = useContext(UserLoggedIn);

  const renderDesktopNavMenu = () => {
    return (
      <ul className="hidden md:flex items-center text-lg font-semibold   ">
         <li className="px-5">
          <Link to="/" className={`hover:text-[#00a6ed] ${pathname === "/" && "font-bold"}`}>
            Home
          </Link>
        </li>
        <li className="px-5">
          <Link
            to="/instamart"
            className={`hover:text-[#00a6ed] ${pathname === "/instamart" && "font-bold"}`}
          >
            Instamart
          </Link>
        </li>
        <li className="px-5">
          <Link to="/cart" className={`flex items-center hover:text-[#00a6ed] ${pathname === "/cart" && "font-bold"}`}>
             <LiaShoppingBagSolid className={`hover:text-[##00a6ed] ${cartItems.length > 0 && "text-green-700 font-bold"}`}/>Cart - {cartItems.length}
          </Link>
        </li>
        <li className="px-5">
          <Link
            to="/about"
            className={`hover:text-[#00a6ed] ${pathname === "/about" && "font-bold"}`}
          >
            About
          </Link>
        </li>
        <li className="px-5">
          <Link
            to="/login"
            className={`hover:text-[#00a6ed] ${pathname === "/login" && "font-bold"}`}
          >
            Login
          </Link>
        </li>
        <li className="px-5">{loggedInUser}</li>
        {/* <li><button className="login-btn"  onClick={() => {setIsLogin(!isLogin)}}>{isLogin ? "Sign In" : "Sign Out"}</button></li> */}
      </ul>
    );
  };

  const renderMobileNavbar = () => {
    return (
      <div ref={ref} className="hamburger md:hidden">
        <Hamburger
          toggled={isOpen}
          size={20}
          toggle={setOpen}
          className="hamburger"
        />
        {isOpen && (
          <div className="flex flex-col absolute left-0 mt-5 bg-[#dadde1] opacity-99 min-h-[60%] w-[100%] z-1">
            <ul className="flex justify-center items-center flex-col">
              <li className="py-5 text-2xl text-[#00a6ed] font-bold">
                {loggedInUser}
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${
                  pathname === "/login" ? "text-[#764abc] font-bold " : ""
                }`}
              >
                <Link to="/login" onClick={handleCloseMenu}>
                  Login
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${
                  pathname === "/" ? "text-[#764abc] font-bold " : ""
                }`}
              >
                <Link to="/" className="mobile-link" onClick={handleCloseMenu}>
                  HOME
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${
                  pathname === "/instamart" ? "text-[#764abc] font-bold " : ""
                }`}
              >
                <Link to="/instamart" onClick={handleCloseMenu}>
                  Instamart
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${
                  pathname === "/cart" ? "text-[#764abc] font-bold " : ""
                }`}
              >
                <Link to="/cart" onClick={handleCloseMenu}>
                  Cart
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${
                  pathname === "/about" ? "text-[#764abc] font-bold " : ""
                }`}
              >
                <Link to="/about" onClick={handleCloseMenu}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="flex items-center justify-between bg-[#ffffff] px-5 py-1 shadow-md w-[100%] sticky top-0 whitespace-pre-wrap  z-50">
      <Link to="/" className="flex items-center">
        <img src={LOGO_IMG_URL} alt="logo" className="w-[72px] h-[72px]  p-3" />
        <h1 className="font-bold text-3xl text-[#00a6ed]">Feastly</h1>
      </Link>

      {renderDesktopNavMenu()}
      {renderMobileNavbar()}
    </nav>
  );
};

export default Header;
