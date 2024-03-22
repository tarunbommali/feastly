import { useState } from "react";
import { LOGO_IMG_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Header = () => {
    const [isLogin , setIsLogin] = useState(false)
    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_IMG_URL} alt="logo" className="logo-img" />
            <h1 className='logo-title'>Feastly</h1>
            </div>
            <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/help" className="nav-link">Help</Link></li>
        <li><Link to="/cart" className="nav-link">Cart</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/Login" className="nav-link">Login</Link></li>
        {/* <li><button className="login-btn"  onClick={() => {setIsLogin(!isLogin)}}>{isLogin ? "Sign In" : "Sign Out"}</button></li> */}
       
      </ul>
        </div>
        
    );
};

export default Header