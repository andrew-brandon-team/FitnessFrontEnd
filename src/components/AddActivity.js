import React, {useState} from 'react';
import {useOutletContext, useNavigate} from 'react-router-dom';

const AddActivity = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const {activitiesObj: [activities, setActivities]} = useOutletContext();
  const navigate = useNavigate();

  async function createNewActivity (event) {
    event.preventDefault();
    try {
      if (!localStorage.getItem("token")) {
        alert("You must be logged in to add a new activity. If you do not have an account, proceed to the registration link on the Login page")
        return;
      }
      const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', 
      {
        method: "POST",
        body: JSON.stringify({
          name,
          description
        })
      });
      const data = await response.json();
      setActivities([...activities, ])
      if (data.success){
        navigate('/activities');
      }
    } catch (error) {
      console.log(error);
    }
  }

  // functionality for form in return statement
  function updateName(event) {
    setName(event.target.value)
  }
  function updateDescription(event) {
    setDescription(event.target.value)
  }


  return (
    <div>
      <form onSubmit={createNewActivity}>

        <label>Activity Name: </label>
        <br />
        <input onChange={updateName} value={name} type="text"></input>
        <br />

        <label>Activity Description: </label>
        <br />
        <input onChange={updateDescription} value={description} type="text"></input>
        <br />

        <button type="submit">Post Activity</button>
        <br />
        <br />

      </form>
    </div>
  )
}

export default AddActivity;