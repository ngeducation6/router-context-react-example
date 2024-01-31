// src/components/SideNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './AppContext';



const SideNav = () => {
  const { appData } = useAppContext();

  const hasPermission = (permissionIndex) => {
    return appData.permissionsSet[permissionIndex] === '1';
  };
  return (
    <div>
      <ul>
      <li><Link to="/login">Login</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/A">Component A</Link></li>
        <li><Link to="/B">Component B</Link></li>
        {hasPermission( 2) && <li><Link to="/C">Component C</Link></li>}
        <li><Link to="/separatecomponent">Separate Component</Link></li>
      </ul>
    </div>
  );
};

export default SideNav;
