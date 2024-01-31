// ComponentsAll.js
import React, { useState } from 'react';
import { useAppContext } from './AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Route, Navigate } from 'react-router-dom';

const ComponentA = () => {
  const { appData, updateContextData } = useAppContext();
  const [newUsername, setNewUsername] = useState('');

  const handleUpdateUsername = () => {
    if (newUsername.trim() !== '') {
      // Update the username in the context
      updateContextData({ username: newUsername });
      setNewUsername(''); // Clear the input field
    }
  };

  return (
    <div>
      <h2>Component A</h2>
      <p>Current Username: {appData.username}</p>
      <input
        type="text"
        placeholder="New Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={handleUpdateUsername}>Update Username</button>
    </div>
  );
};

const ComponentB = () => {
  const { appData, updateContextData } = useAppContext();

  const handleToggleLoggedInStatus = () => {
    // Update the logged-in status in the context
    const isLoggedIn =  !appData.isLoggedIn
    let permissionsSet = appData.permissionsSet;
    if(!isLoggedIn) permissionsSet = '0000' 
    updateContextData({ isLoggedIn, permissionsSet});
  };

  return (
    <div>
      <h2>Component B</h2>
      <p>Current Logged In Status: {appData.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button onClick={handleToggleLoggedInStatus}>Toggle Logged In Status</button>
    </div>
  );
};

const ComponentC = () => {
  const { appData, updateContextData } = useAppContext();
  const [newUsername, setNewUsername] = useState('');

  const handleUpdateData = () => {
    if (newUsername.trim() !== '') {
      // Update both username and logged-in status in the context
      const isLoggedIn =  !appData.isLoggedIn
      let permissionsSet = appData.permissionsSet;
      if(!isLoggedIn) permissionsSet = '0000' 
      updateContextData({ username: newUsername, isLoggedIn, permissionsSet });
      setNewUsername(''); // Clear the input field
    }
  };

  return (
    <div>
      <h2>Component C</h2>
      <p>Current Username: {appData.username}</p>
      <p>Current Logged In Status: {appData.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <input
        type="text"
        placeholder="New Username"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <button onClick={handleUpdateData}>Update Username and Logged In Status</button>
    </div>
  );
};

const NotFound = () => {
  return <div>Not Found Component</div>;
};

const SeparateComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Call navigate when the button is clicked
    navigate('/home');
  };

  return (
    <div>
      <p>Separate Component</p>
      <button onClick={handleButtonClick}>Home</button>
    </div>
  );
};

const Home = () => {
  const { appData } = useAppContext();

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>This is the home component content.</p>
      <p>Current Username: {appData.username}</p>
      <p>Current Logged In Status: {appData.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <p>Current PermissionsSet: {appData.permissionsSet} </p>
      <h6> Note: Permissions are hardcoded in interceptor in index.js</h6>
    </div>
  );
};

// components/Login.js

const Login = () => {
  const { appData, updateContextData } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginUser(); // Simulate login API call
      console.log(response)
      const { status, role, permissionsSet } = response.data;
      console.log( `status, role, permissionsSet ${status} ${role} ${permissionsSet} `)

      if (status === 'success') {
        updateContextData({ isLoggedIn: true, role, permissionsSet });
        navigate('/home');
      } else {
        // Redirect to login if login fails
        navigate('/login');
      }
    } catch (error) {
      console.error('Login API error:', error);
    }
  };

  const loginUser = () => {
    // Simulate API call using Axios interceptor
    return axios.post('/login', { /* any request data */ });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const ProtectedComponent = ({ element: Element, permissionIndex }) => {
  const { appData } = useAppContext();
  const hasPermission = appData.permissionsSet[permissionIndex] === '1';
  console.log(`permissionIndex: ${permissionIndex} hasPermission: ${hasPermission}`)

  return (
    hasPermission ? <Element /> : <Navigate to="/home" replace />
  );
};


export { Home, ComponentA, ComponentB, ComponentC, NotFound, SeparateComponent, Login, ProtectedComponent };
