import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Home from './halaman1/Home';

import './App.css';

function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('Home-intro-section');

  const introRef = useRef(null);
  const biographyRef = useRef(null);

  const NAVBAR_HEIGHT = 100;

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: `-${NAVBAR_HEIGHT}px 0px 0px 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const handleIntersect = (entries) => {
      let currentActive = activeSection;

      const intersectingEntries = entries.filter(entry => entry.isIntersecting);

      if (intersectingEntries.length === 0) {
        if (window.scrollY === 0) {
          setActiveSection('Home-intro-section');
        }
        return;
      }

      let mostIntersectingEntry = null;
      let maxRatio = -1;
      let closestToCenterEntry = null;
      let minDistanceToCenter = Infinity;

      intersectingEntries.forEach(entry => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          mostIntersectingEntry = entry;
        }

        const viewportCenter = window.innerHeight / 2;
        const entryCenter = entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
        const distance = Math.abs(entryCenter - viewportCenter);

        if (distance < minDistanceToCenter) {
          minDistanceToCenter = distance;
          closestToCenterEntry = entry;
        }
      });

      const winningEntry = closestToCenterEntry || mostIntersectingEntry;

      if (winningEntry && winningEntry.target.id !== currentActive) {
        setActiveSection(winningEntry.target.id);
      } else if (!winningEntry && window.scrollY === 0) {
        setActiveSection('Home-intro-section');
      }
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    if (introRef.current) {
      observer.observe(introRef.current);
    }
    if (biographyRef.current) {
      observer.observe(biographyRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
      if (biographyRef.current) {
        observer.unobserve(biographyRef.current);
      }
      observer.disconnect();
    };
  }, [introRef, biographyRef, activeSection]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className='app-container'>
      <Navbar activeSection={activeSection} />
      <main className="app-main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                introRef={introRef}
                biographyRef={biographyRef}
              />
            }
          />
          <Route path="/Education" element={<Home />} />
          <Route path="/Experience" element={<Home />} />
          <Route path="/Project" element={<Home />} />
          <Route path="/Achievement" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;