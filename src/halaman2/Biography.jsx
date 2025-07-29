// src/halaman2/Biography.jsx
import React from 'react'; 
import ComponentLighting from '../ComponentLighting/LightingBiography.jsx'; 
import './Biography.css';


function Biography() {
  return (
    <div  id="Biography-section" className="Biography-container">
      <div className='BackgroundText'>
        MUHAMMAD<br />
        RANGGA<br />
        ZULFIKAR
      </div>

      <div className="LightingBackground1">
        <ComponentLighting />
      </div>
  
    </div>
  );
};

export default Biography;