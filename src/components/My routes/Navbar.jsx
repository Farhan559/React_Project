import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

const Navbar = () => {
  return (
    <>
      <ul className='nav'>
        <li><NavLink className='nav-link' to='/home' activeClassName="active">Home</NavLink></li>
        <li><NavLink className='nav-link' to='/about' activeClassName="active">About Us</NavLink></li>
        <li><NavLink className='nav-link' to='/calculator' activeClassName="active">Calculator</NavLink></li>
        <li><NavLink className='nav-link' to='/login' activeClassName="active">Login</NavLink></li>
        <li><NavLink className='nav-link' to='/company' activeClassName="active">Company</NavLink></li>
        <li><NavLink className='nav-link' to='/contact' activeClassName="active">Contact</NavLink></li>
      </ul>
    </>
  );
};

export default Navbar;
