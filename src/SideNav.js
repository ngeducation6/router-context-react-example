// src/components/SideNav.js
import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
  return (
    <div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/A">Component A</Link></li>
        <li><Link to="/B">Component B</Link></li>
        <li><Link to="/C">Component C</Link></li>
        <li><Link to="/separatecomponent">Separate Component</Link></li>
      </ul>
    </div>
  );
};

export default SideNav;
