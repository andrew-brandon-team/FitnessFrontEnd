import React, {useState, useEffect} from 'react';
import { useOutletContext, useParams, Link } from 'react-router-dom';
import ActivityDelete from './ActivityDelete';
// import DeleteRoutine from './DeleteRoutine'

const RoutineDetails = () => {
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const reverseRoutines = [...routines].reverse();
  const {id} = useParams();
  const [routine, setRoutine] = useState({});

  useEffect(() => {
    const filteredRoutines = routines.filter((singleRoutine) => {
      return id == singleRoutine.id
    });
    console.log(filteredRoutines, filteredRoutines);
    setRoutine(filteredRoutines[0]);
    console.log(routines)
  }, []);

  console.log(routine)

  return (
    <div>
      <div>
        <p>{routine.name}</p>
        <br />
        <p>{routine.goal}</p>
        <br />

        {
        routine.activities && routine.activities.length ? routine.activities.map((activity, idx) => {
          // console.log(routine)
        return <div className="preview-item" key = {idx}>
            
            <p>{activity.name}</p>
            <ActivityDelete activity={activity}/>

            {/* <p><span>{routine.goal}</span></p> */}

            </div>
        }) : <p>No activities are attached to this routine yet!</p>
      } 

      </div>
      <Link to="edit-routine"><button>Edit</button></Link>
    </div>
  )
}

export default RoutineDetails;