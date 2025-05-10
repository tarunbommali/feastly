import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useClickAway } from "react-use";
import { useSelector, useDispatch } from "react-redux";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { Menu, X } from "lucide-react";
import { LOGO_IMG_URL } from "../utils/constants";
import { toggleSidebar } from "../redux-store/sidebarSlice";

const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const dispatch = useDispatch();

  const expanded = useSelector((state) => state.sidebar.expanded);
  const cartItems = useSelector((store) => store.cart.items);

  const [tabId, setTabId] = useState("profile");
  const sidebarRef = useRef(null);

  // Close sidebar when clicking outside
  useClickAway(sidebarRef, () => {
    if (expanded) dispatch(toggleSidebar());
  });

  // Handle about/:tab path
  useEffect(() => {
    if (pathname.startsWith("/about/")) {
      setTabId(pathname.split("/")[2] || "profile");
    }
  }, [pathname]);

  const navMenuList = [
    { label: "Home", path: "/" },
    { label: "Instamart", path: "/instamart" },
    { label: "Cart", path: "/cart" },
    { label: "About", path: `/about/${tabId}` },
    { label: "Authentication", path: "/login" },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-slate-50 shadow-md sticky top-0 z-50">
      <header className="flex items-center justify-between w-full md:w-[90%] md:px-4 py-2">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LOGO_IMG_URL}
            alt="logo"
            className="w-[64px] h-[64px] p-2"
          />
          <h1 className="font-bold text-3xl text-[#00a6ed]">Feastly</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center text-lg font-thin">
          {navMenuList.map((item) => (
            <li className="px-5" key={item.label}>
              <Link
                to={item.path}
                className={`hover:text-[#00a6ed] ${
                  pathname === item.path || pathname.startsWith(item.path)
                    ? "font-bold"
                    : ""
                } flex items-center`}
              >
                {item.label === "Cart" ? (
                  <>
                    <LiaShoppingBagSolid
                      className={`mr-1 ${
                        cartItems.length > 0 ? "text-green-700 font-bold" : ""
                      }`}
                    />
                    {item.label} - {cartItems.length}
                  </>
                ) : (
                  item.label
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button className="p-2 rounded-lg" onClick={() => dispatch(toggleSidebar())}>
            {expanded ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar and Overlay */}
      {expanded && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => dispatch(toggleSidebar())}
          ></div>
          <aside
            ref={sidebarRef}
            className={`fixed top-0 left-0 w-[75%] sm:w-[60%] h-full transform transition-transform duration-300 md:hidden z-50 bg-white text-black ${
              expanded ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="flex flex-col p-4 gap-3">
              <ul className="flex flex-col space-y-4">
                {navMenuList.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.path}
                      className={`text-xl font-semibold ${
                        pathname === item.path ||
                        pathname.startsWith(item.path)
                          ? "text-blue-600"
                          : ""
                      } flex items-center`}
                      onClick={() => dispatch(toggleSidebar())}
                    >
                      {item.label === "Cart" ? (
                        <>
                          <LiaShoppingBagSolid
                            className={`mr-1 ${
                              cartItems.length > 0
                                ? "text-green-700 font-bold"
                                : ""
                            }`}
                          />
                          {item.label} - {cartItems.length}
                        </>
                      ) : (
                        item.label
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </>
      )}
    </div>
  );
};

export default Header;
