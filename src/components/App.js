import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>
        Fitness Tracker
      </h1>

      <Navbar />

      <Outlet context />

      <footer>
        Developed with love by some guys.
      </footer>
    </div>
  )
}

export default App;