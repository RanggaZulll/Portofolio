// src/Navbar.jsx

import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import './Navbar.css';


function Navbar({ activeSection }) { 
  const navigate = useNavigate();

  console.log("Current active section in Navbar:", activeSection);

  return (
    <div className= 'PosisiHeader'>
      <div className='Header'>
        <NavLink to="/#Home-intro-section" className={activeSection === 'Home-intro-section' ? "active-link" : ""} > 
          Home
        </NavLink>

        <NavLink to="/#Biography-section" className={activeSection === 'Biography-section' ? "active-link" : ""}>
          Biography
        </NavLink>

        <NavLink to="/Education" className={({ isActive }) => isActive ? "active-link" : ""}>
          Education
        </NavLink>

        <NavLink to="/Experience" className={({ isActive }) => isActive ? "active-link" : ""}>
          Experience
        </NavLink>

        <NavLink to="/Project" className={({ isActive }) => isActive ? "active-link" : ""}>
          Project
        </NavLink>

        <NavLink to="/Achievement" className={({ isActive }) => isActive ? "active-link" : ""}>
          Achievement
        </NavLink>

      </div>
    </div>
  );
}

export default Navbar;