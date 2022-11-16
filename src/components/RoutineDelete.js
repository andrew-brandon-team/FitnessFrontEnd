import { useOutletContext, useNavigate } from "react-router-dom";

const RoutineDelete = ({routine}) => {
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const navigate = useNavigate();

  async function deleteThisRoutine (id) {
    try {
      const response = await fetch (`https://fitnesstrac-kr.herokuapp.com/api/routines/${routine.id}`, 
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      const deleteData = await response.json();
      console.log("this is the delete data", deleteData);
      const otherResponse = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/routines')
      const otherData = await otherResponse();
      setRoutines(otherData);
      navigate('/routines')
    } catch (error) {
      console.log('error:', error)
    }
  }

  return (
    <div>
      <button onClick={(event) => {
        event.preventDefault()
        deleteThisRoutine(routine.id)}}>
        Delete Routine
      </button>
        {/* when it is time to use this on RoutineDetails, use below: */}
      {/* <RoutineDelete routine={routineObj} /> */}
    </div>
  )
}

export default RoutineDelete;