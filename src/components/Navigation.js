import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-button" onClick={toggleNav}>
        {isOpen ? '×' : '☰'}
      </button>
      <nav className={`nav ${isOpen ? '' : 'hidden'}`}>
        <NavLink to="/" exact className="nav-item" activeClassName="active">Home</NavLink>
        <NavLink to="/profile" className="nav-item" activeClassName="active">Profile</NavLink>
        <NavLink to="/settings" className="nav-item" activeClassName="active">Settings</NavLink>
      </nav>
    </>
  );
};

export default Navigation;
