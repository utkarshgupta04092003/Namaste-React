// Header component
import { useState } from "react";
import "../styles/Header.css";
import logo from '../images/logo.jpg';
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  return (
    <div id="header">
      <div id="header-left">
        <div id="logo">
          <img
          src={logo}
          alt=""
        />
        </div>
        <h2>Food Wala</h2>
      </div>

      <div id="header-right">
        <ul>
          <li>Online Status: {isOnline?<i class="fa-solid fa-wifi online"></i>:<i class="fa-solid fa-plane-up offline"></i>}</li>
          <li><Link to='/'>Home</Link></li>
          <li>Foods</li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/instamart'>Instamart</Link></li>
          <li>cart</li>
          
          <li>
            {(isLoggedIn)?
            <button className="authenticate-btn logout" onClick={()=>setIsLoggedIn(false)}>Logout</button>:
            <button className="authenticate-btn login" onClick={()=>setIsLoggedIn(true)}>Login</button>}

          </li>
        </ul>

      </div>
    </div>
  );
}

export default Header;
