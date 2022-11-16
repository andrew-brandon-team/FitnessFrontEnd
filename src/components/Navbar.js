import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="login">Login</Link>
        <br />

        <Link to="activities">Activities</Link>

        <Link to="add-activity">/NewActivity/</Link>

        <Link to="edit-activity">/EditActivity/</Link>
        <br />

        <Link to="routines">Routines</Link>

        <Link to="add-routine">/NewRoutine/</Link>

        <Link to="edit-routine">/EditRoutine</Link>

      </nav>

    </div>
  )
}

export default Navbar;