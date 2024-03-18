import { LOGO_IMG_URL } from "../utils/constants";

const Header = () => {
    
    return (
        <div className='header'>
            <div className='logo'>
                <img src={LOGO_IMG_URL} alt="logo" className="logo-img" />
            <h1 className='logo-title'> Feastly Foods</h1>
            </div>
            <ul className="nav-list">
        <li>Home</li>
        <li>Help</li>
        <li>Sign In</li>
        <li>Cart</li>
      </ul>
        </div>
        
    );
};

export default Header