// Header component
import { useState } from "react";
import "../styles/Header.css";
function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div id="header">
      <div id="header-left">
        <div id="logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz89HdHS5jLOVIRcTaDzsEa8AQzyyB63UYkZvl6C8&s"
            alt=""
          />
        </div>
        <h2>Food Wala</h2>
      </div>

      <div id="header-right">
        <ul>
          <li>Home</li>
          <li>Foods</li>
          <li>About</li>
          <li>Contact</li>
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
