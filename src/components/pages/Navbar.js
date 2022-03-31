import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
   const [click, setClick] = useState(false);

   const [button, setButton] = useState(true);
   console.log(button);

   const handleClick = () => setClick(!click);
   const closeMenu = () => setClick(false);

   const showButton = () => {
      if (window.innerWidth <= 1024) {
         setButton(false);
      } else {
         setButton(true);
      }
   };

   window.addEventListener("resize", showButton);

   return (
      <>
         <IconContext.Provider value={{ color: "#fff" }}>
            <div className="navbar">
               <div className="navbar-container container">
                  <Link to="/" className="navbar-logo" onClick={closeMenu}>
                     <img
                        src={require("../../assets/images/Prime puma.png")}
                        className="logo"
                        alt="logo"
                     />
                  </Link>
                  <div className="menu-icon" onClick={handleClick}>
                     {click ? <FaTimes /> : <FaBars />}
                  </div>

                  {/* !LIST! */}
                  <ul className={click ? "nav-menu active" : "nav-menu"}>
                     <li className="nav-item">
                        <Link
                           to="/story"
                           className="nav-links"
                           onClick={closeMenu}
                        >
                           STORY
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link
                           to="/roadmap"
                           className="nav-links"
                           onClick={closeMenu}
                        >
                           ROADMAP
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link
                           to="/calculator"
                           className="nav-links"
                           onClick={closeMenu}
                        >
                           CALCULATOR
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link
                           to="/social"
                           className="nav-links"
                           onClick={closeMenu}
                        >
                           SOCIAL
                        </Link>
                     </li>

                     <li className="nav-item">
                        <Link
                           to="/buynow"
                           className="nav-links"
                           onClick={closeMenu}
                        >
                           <button className="buy">BUY NOW</button>
                        </Link>
                     </li>

                     {/* <li className="nav-btn">
                     {button ? (
                        <Link to="/buynow" className="btn-link">
                        <Button buttonStyle="btn--outline">BUY NOW</Button>
                        </Link>
                        ) : (
                           <Link to="/buynow" className="btn-link">
                           <Button
                           buttonStyle="btn--outline"
                           buttonSize="btn--mobile"
                           >
                           BUY NOW
                           </Button>
                           </Link>
                           )}
                        </li> */}
                  </ul>
               </div>
            </div>
         </IconContext.Provider>
      </>
   );
}

export default Navbar;
