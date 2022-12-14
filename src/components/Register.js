import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  async function formSubmitHandler (event) {
    event.preventDefault();
    try {
      const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/users/register', 
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
        console.log("This is the registration data", data)

        if (data.token) {
          localStorage.setItem("token", data.token)
          navigate('/');
        }
        
    } catch (error) {
      console.log(error)
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
      <h3 className="product-title">Registration Form</h3>
      <form clasName="form-container" onSubmit={formSubmitHandler}>

        <label>
          Enter New Username:
        </label>
        <br />
        <input className="form-field" value={username} onChange={updateUserNameState} type="text">
        </input>

        <br />
        <label>
          Enter Password:
        </label>
        <br />
        <input className="form-field" value={password} onChange={updatePasswordState} type="password">
        </input>

        <br />
        <button className="form-bttn" type="submit">Register</button>
        <br />
        <br />

      </form>
    </div>
  )
};

export default Register;