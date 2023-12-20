// ComponentsAll.js
import React from 'react';

const ComponentA = () => {
  return <div>Component A</div>;
};

const ComponentB = () => {
  return <div>Component B</div>;
};

const ComponentC = () => {
  return <div>Component C</div>;
};

const NotFound = () => {
    return <div>Not Found Component</div>;
};

const SeparateComponent = () => {
    return <div>Separate Component</div>;
};

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>This is the home component content.</p>
    </div>
  );
};


export { Home, ComponentA, ComponentB, ComponentC, NotFound, SeparateComponent};
