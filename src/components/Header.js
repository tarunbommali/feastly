import { LOGO_IMG_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useClickAway } from "react-use";
import { useRef, useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;

  // subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const [isOpen, setOpen] = useState(false);
  const [tabId, setTabId] = useState("profile");
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  const handleCloseMenu = () => {
    setOpen(false);
  };

  // Update the tabId dynamically when the route changes
  useEffect(() => {
    if (pathname.startsWith("/about/")) {
      setTabId(pathname.split("/")[2] || "profile");
    }
  }, [pathname]);

  const renderDesktopNavMenu = () => {
    return (
      <ul className="hidden md:flex items-center text-lg font-thin">
        <li className="px-5">
          <Link
            to="/"
            className={`hover:text-[#00a6ed] ${pathname === "/" && "font-bold"}`}
          >
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
          <Link
            to="/cart"
            className={`flex items-center hover:text-[#00a6ed] ${pathname === "/cart" && "font-bold"}`}
          >
            <LiaShoppingBagSolid
              className={`hover:text-[##00a6ed] ${cartItems.length > 0 && "text-green-700 font-bold"}`}
            />
            Cart - {cartItems.length}
          </Link>
        </li>
        <li className="px-5">
          <Link
            to={`/about/${tabId}`}
            className={`hover:text-[#00a6ed] ${pathname.startsWith("/about") && "font-bold"}`}
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
      </ul>
    );
  };

  const renderMobileNavbar = () => {
    return (
      <div ref={ref} className="hamburger md:hidden">
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} className="hamburger" />
        {isOpen && (
          <div className="flex flex-col absolute left-0 mt-5 bg-[#dadde1] opacity-99 min-h-[60%] w-[100%] z-1">
            <ul className="flex justify-center items-center flex-col">
              <li className="py-5 text-2xl text-[#00a6ed] font-bold">{loggedInUser}</li>
              <li
                className={`m-2 font-semibold text-2xl ${pathname === "/login" ? "text-[#764abc] font-bold " : ""}`}
              >
                <Link to="/login" onClick={handleCloseMenu}>
                  Login
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${pathname === "/" ? "text-[#764abc] font-bold " : ""}`}
              >
                <Link to="/" className="mobile-link" onClick={handleCloseMenu}>
                  HOME
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${pathname === "/instamart" ? "text-[#764abc] font-bold " : ""}`}
              >
                <Link to="/instamart" onClick={handleCloseMenu}>
                  Instamart
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${pathname === "/cart" ? "text-[#764abc] font-bold " : ""}`}
              >
                <Link to="/cart" onClick={handleCloseMenu}>
                  Cart
                </Link>
              </li>
              <li
                className={`m-2 font-semibold text-2xl ${pathname.startsWith("/about") ? "text-[#764abc] font-bold " : ""}`}
              >
                <Link to={`/about/${tabId}`} onClick={handleCloseMenu}>
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
    <div className="w-[100%] flex justify-center items-center bg-slate-50 shadow-md sticky top-0 whitespace-pre-wrap  z-50">
      <nav className="flex items-center justify-between  px-5 py-1  w-[85%]">
        <Link to="/" className="flex items-center">
          <img src={LOGO_IMG_URL} alt="logo" className="w-[72px] h-[72px]  p-3" />
          <h1 className="font-bold text-3xl text-[#00a6ed]">Feastly</h1>
        </Link>

        {renderDesktopNavMenu()}
        {renderMobileNavbar()}
      </nav>
    </div>
  );
};

export default Header;
