
import reportWebVitals from './reportWebVitals';

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import { Home, ComponentA, ComponentB, ComponentC, NotFound, SeparateComponent } from './ComponentsAll'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/separatecomponent" element={<SeparateComponent />} /> {/* Match any other route */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="A" element={<ComponentA />} />
        <Route path="B" element={<ComponentB />} />
        <Route path="C" element={<ComponentC />} />
      </Route>
      <Route path="*" element={<NotFound />} /> {/* Match any other route */}
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
