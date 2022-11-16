import React, {useState} from 'react';
import {useNavigate, useOutletContext, Link} from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext();
  
  async function formSubmitHandler (event) {
    event.preventDefault();
    try {
      const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/login', 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password
          })
        })
        const data = await response.json();
        console.log('this is the login data', data)
        // localStorage.setItem("token", data.data.token)
        //   navigate('/');


        // navigate('/')

        if (data.token){
          localStorage.setItem("token", data.token)
          navigate('/');
      }

    } catch (error) {
      console.log(error)
    }
    if (localStorage.getItem('token')) {
      async function fetchUserData () {
          try {
              const response = await fetch("https://fitnesstrac-kr.herokuapp.com/api/users/me", 
              {
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                  },
              })
              const userData = await response.json();
              setCurrentProfile(userData.data)
              // console.log(currentProfile)
              // console.log(userData)
          } catch (error) {
              console.log(error)
          }
      }
      fetchUserData();
  }
  }
  function updateUserNameState(event) {
    setUsername(event.target.value)
  }

  function updatePasswordState(event) {
    setPassword(event.target.value) 
  }
  return (
    <div>
      <br />
      Login Form
      <br />
      <form onSubmit={formSubmitHandler}>

        <label>
          Enter Username:
        </label>
        <br />
        <input value={username} onChange={updateUserNameState} type="text">
        </input>

        <br />
        <label>
          Enter Password:
        </label>
        <br />
        <input value={password} onChange={updatePasswordState} type="text">
        </input>

        <br />
        <button type="submit">Login</button>
        <br />

        <br />
        <Link to="/register">Register Here</Link>
        <br />
        <br />

      </form>
    </div>
  )
};

export default Login;