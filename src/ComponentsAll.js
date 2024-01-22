// ComponentsAll.js
import React, { useState } from 'react';
import { useAppContext } from './AppContext';
import { useNavigate } from 'react-router-dom';

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
    updateContextData({ isLoggedIn: !appData.isLoggedIn });
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
      updateContextData({ username: newUsername, isLoggedIn: !appData.isLoggedIn });
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
    </div>
  );
};

export { Home, ComponentA, ComponentB, ComponentC, NotFound, SeparateComponent };
