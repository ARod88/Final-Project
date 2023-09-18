import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate()
  const logout =() => {
    localStorage.clear();
    navigate('/signup')
  }

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
            <Link onClick={logout}to="/signup">Logout</Link>
          ) : (
            <Link to="/signup">SignUp</Link>
          )}
        </li>
      </ul>
    </div>
  )
}

export default NavBar;
