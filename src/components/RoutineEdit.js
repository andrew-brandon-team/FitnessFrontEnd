import React, {useState} from 'react';
import { useOutletContext, useParams} from 'react-router-dom';
import RoutineDelete from './RoutineDelete';

const RoutineEdit = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const {id} = useParams();

  // useEffect(() => {
  //   const filteredRoutines = routines.filter((singleRoutine) => {
  //     return id == singleRoutine.id
  //   });
  //   console.log(filteredRoutines, filteredRoutines);
  //   setRoutine(filteredRoutines[0]);
  //   console.log(routines)
  // }, []);


  async function submitRoutineEdit (event) {
    event.preventDefault();
    try {
      const response = await fetch (`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, 
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "PATCH",
        body: JSON.stringify({
          name,
          goal
        })
      })
      const otherResponse = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/routines')
      const otherData = await otherResponse.json();
      console.log(otherData)
      setRoutines(otherData);
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
    setIsPublic (event.target.checked)
    console.log('isPublic:', isPublic)
    console.log('isChecked:', event.target.checked)
    console.log('!isChecked:', !event.target.checked)
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

        <label>Make Public:</label> 
        <input onChange={editIsPublic} value={isPublic} type="checkbox"></input>
        <br />
        
        <button type="submit">Update Routine</button>
        <br />
        <br />
        <RoutineDelete />

      </form>
    </div>
  )
}

export default RoutineEdit;