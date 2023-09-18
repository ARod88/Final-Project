import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const auth = localStorage.getItem('user');

  return (
    <div>
      <ul className='nav-ul'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
 
        <li><Link to="/profile">Profile</Link></li>
        <li>
          {auth ? (
            <Link to="/logout">Logout</Link>
          ) : (
            <Link to="/signup">SignUp</Link>
          )}
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
