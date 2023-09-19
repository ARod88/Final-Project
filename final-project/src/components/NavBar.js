import React from "react";
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
      localStorage.clear();
      navigate("/signup");
  };

  // Determine if the current page is the home page
  const isHomePage = window.location.pathname === "/";

  return (
      <div>
          <img alt="logo" className="logo" src="/images/Logo.jpg" />

          {/* Conditionally render the "Home" link */}
          {isHomePage ? null : (
              <ul className="navbar-home">
                  <li>
                      <Link to="/">Home</Link>
                  </li>
              </ul>
          )}

          {auth ? (
              <ul className="nav-ul">
                  <li>
                      <Link to="/"></Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/api/products">Gallery</Link>
                  </li>

                  <li>
                      <Link to="/contact">ContactUs</Link>
                  </li>
                  <li>
                      <Link onClick={logout} to="/signup">
                          Logout ({JSON.parse(auth).name})
                      </Link>
                  </li>
              </ul>
          ) : (
              <ul className="nav-ul nav-right">
                  <li>
                      <Link to="/signup">Sign Up</Link>
                  </li>
                  <li>
                      <Link to="/login">Login</Link>
                  </li>
              </ul>
          )}
      </div>
  );
};

export default NavBar;
