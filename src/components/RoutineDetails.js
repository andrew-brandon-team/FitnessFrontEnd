import React, {useState, useEffect} from 'react';
import { useOutletContext, useParams, Link } from 'react-router-dom';
import ActivityDelete from './ActivityDelete';
import RoutineDelete from './RoutineDelete';
import {BiTimer} from 'react-icons/bi'
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
      <div className="details-container">
        <p className="details-logo"><BiTimer /></p>
        <p className="details-name">Routine: {routine.name}</p>
        <br />
        <p className="details-more">Goal: {routine.goal}</p>
        <br />
        <p className="details-more">Activities:</p>
        <div className="routine-activities-container">
          {
            routine.activities && routine.activities.length ? routine.activities.map((activity, idx) => {
              // console.log(routine)
            return <div className="preview-item" key = {idx}>
                
                <p className="details-more">{activity.name}</p>
                <ActivityDelete activity={activity}/>

                {/* <p><span>{routine.goal}</span></p> */}

                </div>
            }) : <p className="details-more">No activities are attached to this routine yet!</p>
          } 
        </div>

      <Link className="details-more" to="edit-routine"><button>Edit</button></Link>
      <br />
      <RoutineDelete />
      <br />
      </div>

    </div>
  )
}

export default RoutineDetails;