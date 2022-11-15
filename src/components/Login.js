import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return (
    <div>
      Login
      <form>Form here</form>
      <Link to="/register">Register here</Link>
    </div>
  )
};

export default Login;