import React, {useState, useEffect} from 'react';
import { useOutletContext, useParams, Link } from 'react-router-dom';

const RoutineDetails = () => {
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const reverseRoutines = [...routines].reverse();
  const {id} = useParams();
  const [routine, setRoutine] = useState({});

  useEffect(() => {
    const filteredRoutines = routines.filter((singleRoutine) => {
      return id === singleRoutine._id
    });
    console.log(filteredRoutines);
    setRoutine(filteredRoutines[0]);
  }, []);

  console.log(routine)

  return (
    <div>
      <div>
        <p>{routine.name}</p>
        <br />
        <p>{routine.goal}</p>
      </div>
      <Link to="routineEdit">Edit this routine</Link>
    </div>
  )
}

export default RoutineDetails;