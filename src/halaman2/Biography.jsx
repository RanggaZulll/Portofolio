// src/halaman2/Biography.jsx
import React from 'react'; 
import './Biography.css';


const Biography = React.forwardRef((props, ref) => {
  return (
    <div id="Biography-section" className="Biography-container" ref={ref}>
      <h1>Biography Page</h1>
      <p>Ini adalah halaman untuk detail biografi Anda.</p>
    </div>
  );
});

export default Biography;