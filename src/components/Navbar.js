import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({isLoggedIn}) => {
  return (
    <div>

      <nav>

        <Link to="/">Home</Link>

        <Link to="activities">Activities</Link>

        <Link to="routines">Routines</Link>

        {
          isLoggedIn ? 
          (<Link to="my-routines">My Routines</Link>)
          :
          (<Link to="login">Login</Link>)
        }

      </nav>

    </div>
  )
}

export default Navbar;