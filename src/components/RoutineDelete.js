import { useOutletContext, useParams, useNavigate } from "react-router-dom";

const RoutineDelete = ({routine}) => {
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const navigate = useNavigate();
  const {id} = useParams();

  async function deleteThisRoutine () {
    try {
      const response = await fetch (`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}`, 
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
      const newRoutines = await otherResponse.json();
      setRoutines(newRoutines);
      navigate('/routines')
    } catch (error) {
      console.log('error:', error)
    }
  }

  return (
    <div className="details-more">
      <button className="red-bttn" onClick={(event) => {
        event.preventDefault()
        deleteThisRoutine(id)}}>
        Delete Routine
      </button>
        {/* when it is time to use this on RoutineDetails, use below: */}
      {/* <RoutineDelete routine={routineObj} /> */}
    </div>
  )
}

export default RoutineDelete;