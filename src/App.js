// // App.js
// import React from 'react';
// import { CounterContextProvider } from './CounterContextProvider';
// import { Outlet } from 'react-router-dom';
// import SideNav from './SideNav';

// const App = () => {
//   return (
//     <CounterContextProvider>
//       <div style={{ display: 'flex' }}>
//         {/* Sidebar */}
//         <SideNav />

//         {/* Main content area */}
//         <div style={{ flex: 1, padding: '20px' }}>
//           {/* Use Outlet to render nested routes */}
//           <Outlet />
//         </div>
//       </div>
//     </CounterContextProvider>
//   );
// };

// export default App;

// src/App.js
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
