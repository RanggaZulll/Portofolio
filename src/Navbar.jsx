import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = [
      { id: 'Home-intro-section', name: 'home' },
      { id: 'Biography-section', name: 'biography' }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const found = sections.find(sec => sec.id === entry.target.id);
            if (found) {
              setActiveSection(found.name);
            }
          }
        });
      },
      {
        threshold: 0.9 // Muncul minimal 50% di layar
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className='PosisiHeader'>
      <div className='Header'>
        <a
          href="/#Home-intro-section"
          className={activeSection === 'home' ? 'active-link' : ''}
        >
          Home
        </a>

        <a
          href="/#Biography-section"
          className={activeSection === 'biography' ? 'active-link' : ''}
        >
          Biography
        </a>

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
