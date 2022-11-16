import React, {useState} from 'react';
import {useOutletContext, useNavigate} from 'react-router-dom';

const RoutineAdd = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const navigate = useNavigate();

  async function createNewRoutine (event) {
    event.preventDefault();
    try {
      if (!localStorage.getItem("token")) {
        alert("You must be logged in to add a new routine. If you do not have an account, proceed to the registration link on the Login page.")
        return;
      }
      const response = await fetch("http://fitnesstrac-kr.herokuapp.com/api/routines", 
      {
        method: "POST",
        body: "JSON.stringify"({
          name,
          goal,
          isPublic
        })
      })
      const data = await response.json();
      setRoutines([...routines.data.routines])
      if (data.success){
        navigate('./routines');
      }
      console.log('createNewRoutine POST successful')
    } catch (error) {
      console.log(error);
    }
  }

  function updateRoutineName(event) {
    setName(event.target.value)
    console.log(name)
  }
  function updateRoutineGoal(event) {
    setGoal(event.target.value)
    console.log(goal)
  }
  function updateIsPublic(event) {
    setIsPublic(event.target.value)
    console.log(isPublic)
  }

  return (
    <div>
      Add Routine Form:
      <form onSubmit={createNewRoutine}>
        
        <label>
          Enter routine name:
        </label>
        <br />
        <input onChange={updateRoutineName} value={name} type="text"></input>
        <br />

        <label>
          Enter routine goal:
        </label>
        <br />
        <input onChange={updateRoutineGoal} value={goal} type="text"></input>
        <br />

        <label>
          Public routine?
        </label>
        <input onChange={updateIsPublic} value={isPublic} type="checkbox"></input>
        <br />

        <button type="submit">Post</button>
        <br />
        <br />
      </form>
    </div>
  )
}

export default RoutineAdd;