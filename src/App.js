// src/App.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';

const App = () => {
  return (
    <>
    <p>App component</p>
    <div style={{ display: 'flex' }}>
      <SideNav />
      <div style={{ flex: 1, marginLeft: '200px' }}>
        <Outlet />
      </div>
    </div>
    </>
  );
};

export default App;
