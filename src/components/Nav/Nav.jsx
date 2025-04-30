import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Make sure to create and style this CSS file
import img from './cvvvv.png'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
     <h1 class="logoc">
      <img class="cv" src={img} alt="" />
     </h1>
      <div className="toggle-button" onClick={toggleNavbar}>☰</div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/Home" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`}>About</NavLink>
        <NavLink to="/Resume" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`}>Templets</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `${isActive ? "text-primary" : "text-danger"}`}>Contact</NavLink>
      </div>
    </div>
  );
}
