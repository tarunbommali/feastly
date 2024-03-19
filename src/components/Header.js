import { useState } from "react";
import { LOGO_IMG_URL } from "../utils/constants";

const Header = () => {
    const [isLogin , setIsLogin] = useState(false)
    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_IMG_URL} alt="logo" className="logo-img" />
            <h1 className='logo-title'> Feastly Foods</h1>
            </div>
            <ul className="nav-list">
        <li>Home</li>
        <li>Help</li>
        <li>Cart</li>
        <li><button className="login-btn" onClick={() => {setIsLogin(!isLogin)}}>{isLogin ? "Sign In" : "Sign Out"}</button></li>
       
      </ul>
        </div>
        
    );
};

export default Header