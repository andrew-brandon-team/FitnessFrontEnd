import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="activities">Activities</Link>

        <Link to="routines">Routines</Link>

        <Link to="login">Login</Link>

        {/* ternary for login/profile */}

        <Link to="add-routine">/NewRoutine/</Link>

        <Link to="edit-routine">/EditRoutine</Link>

      </nav>

    </div>
  )
}

export default Navbar;