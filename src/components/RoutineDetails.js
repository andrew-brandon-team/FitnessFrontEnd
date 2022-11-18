import React, {useState, useEffect} from 'react';
import { useOutletContext, useParams, Link } from 'react-router-dom';
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
      </div>
      <Link to="edit-routine">Edit this routine</Link>
    </div>
  )
}

export default RoutineDetails;