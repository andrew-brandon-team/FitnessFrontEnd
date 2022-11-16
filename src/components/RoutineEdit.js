import React, {useState} from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';

const RoutineEdit = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [idPublic, setIsPublic] = useState(false);
  const {routinesObj: [routines, setRoutines]} = useOutletContext();

  async function submitRoutineEdit (event) {
    event.preventDefault();
    try {
      const response = await fetch (`http://fitnesstrac-kr.herokuapp.com/api/routines/{props.routines._id}`, 
      {
        method: "PATCH",
        body: JSON.stringify({
          name,
          goal
        })
      })
      const otherResponse = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/routines')
      const otherData = await otherResponse.json();
      console.log(otherData)
      setRoutines(otherData.data.routines);
    } catch (error) {
      console.log(error);
    }
  }

  function editName (event) {
    setName(event.target.value)
    console.log(event.target.value)
  }

  function editGoal (event) {
    setGoal (event.target.value)
    console.log(event.target.value)
  }

  function editIsPublic (event) {
    setIsPublic (event.target.value)
    // console.log (event.target.checked)
  }

  return (
    <div>
      RoutineEdit Form:
      <form onSubmit={submitRoutineEdit}>
        <label>
          Routine Name:
        </label>
        <br />
        <input onChange={editName} value={name} type='text'>
        </input>
        <br />

        <label>
          Goal:
        </label>
        <br />
        <input onChange={editGoal} value={goal} type='text'></input>
        <br />
        
        <button type="submit">Update Routine</button>
        <br />
        <br />

      </form>
    </div>
  )
}

export default RoutineEdit;