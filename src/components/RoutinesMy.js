import {useEffect, useState} from 'react';
import { useOutletContext, Link } from 'react-router-dom';

const RoutinesMy = () => {
  const [myRoutines, setMyRoutines] = useState([]);
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext();
  const reverseMyRoutines = myRoutines.length ? [...myRoutines].reverse() : [];

  useEffect(() => {
    async function viewMyRoutines() {
      try {
        const response = await fetch (`http://fitnesstrac-kr.herokuapp.com/api/users/${currentProfile.username}/routines`, 
        {
          headers: {
            'Content-Type': 'application/json',
          },
        })

        const data = await response.json();
        setMyRoutines(data);
      } catch (error) {
        console.log(error)
      }
    }
    if(currentProfile.username) {viewMyRoutines()}
  }, [currentProfile])
  return (
    <div>
      My Routines go here.

      {
        reverseMyRoutines && reverseMyRoutines.length ? reverseMyRoutines.map((routine, idx) => {
          // console.log();
          return (
            <div key={routine.id}>
              <Link to="{`/routines/${routine.id}`}">{routine.name}</Link>
              <p>{routine.goal}</p>

              
            </div>
            
          ) 
        }) : <p>No products to display at this time</p>
        }
    </div>
  )
}

export default RoutinesMy;