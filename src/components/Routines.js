import React from 'react';
import { Link, useOutletContext} from 'react-router-dom';

const Routines = () => {
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const reverseRoutines = [...routines].reverse();

  return (
    <div>
      {
      reverseRoutines && reverseRoutines.length ? reverseRoutines.map((routine, idx) => {
          // console.log(routine)
        return <div className="preview-item" key = {idx}>
            
            <Link to={`/routines/${routine.id}`}><span><b>{routine.name}</b></span></Link>

            <p><span>{routine.goal}</span></p>

            </div>
        }) : <p>No routines to display at this time</p>
      } 
    </div>
  )
};

export default Routines;