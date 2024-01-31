// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import { Home, ComponentA, ComponentB, ComponentC, NotFound, SeparateComponent, Login, ProtectedComponent } from './ComponentsAll'
import { AppProvider } from './AppContext';
import axios from 'axios';

axios.interceptors.request.use(
  (config) => {
    console.log('Request Interceptor:', config);
    return config;
  },
  (error) => {
    console.error('Request Error Interceptor:', error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log('Response Interceptor:', response);
    // Simulate a successful login response
    if (response.config.url === '/login') {
      return {
        data: {
          status: 'success',
          role: 'all',
        },
        status: 200,
        statusText: 'OK',
        headers: response.headers,
        config: response.config,
        request: response.request,
      };
    }

    // Return the original response for other URLs
    return response;
  },


    (error) => {
      // Intercept and fake the response for a 404 error
      if (error.response && error.response.status === 404 && error.config.url === '/login') {
        return {
          data: {
            status: 'success',
            role: 'hello',
            permissionsSet: '1011',
          },
          status: 200,
          statusText: 'OK',
          headers: error.response.headers,
          config: error.config,
          request: error.request,
        };
      }
  
      // Handle other response errors
      return Promise.reject(error);
   
  }
);


ReactDOM.render(
  <Router>
    <AppProvider>
      <Routes>
        <Route path="/separatecomponent" element={<SeparateComponent />} />
        <Route
          path="/"
          element={<App />}
        >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route
            path="A"
            element={<ProtectedComponent element={ComponentA} permissionIndex={0} />}
          />
          <Route
            path="B"
            element={<ProtectedComponent element={ComponentB} permissionIndex={1} />}
          />
          <Route
            path="C"
            element={<ProtectedComponent element={ComponentC} permissionIndex={2} />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
