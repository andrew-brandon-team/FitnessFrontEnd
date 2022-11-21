import {useEffect, useState} from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import Logout from './Logout';

const RoutinesMy = () => {
  const [myRoutines, setMyRoutines] = useState([]);
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext();
  const reverseMyRoutines = myRoutines.length ? [...myRoutines].reverse() : [];

  useEffect(() => {
    async function viewMyRoutines() {
      try {
        const response = await fetch (`https://fitnesstrac-kr.herokuapp.com/api/users/${currentProfile.username}/routines`, 
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
      <div className="product-title">My Routines</div>
      <div className='add-activity'>
      <Link to="/add-activity"><button>Add Activity</button></Link>
      <Link to="/add-routine"><button>Add Routine</button></Link>
      <Logout />
      </div>
      {
        reverseMyRoutines && reverseMyRoutines.length ? reverseMyRoutines.map((routine, idx) => {
          console.log(typeof routine.id);
          return (
            <div className='my-routines' key={routine.id}>
              <Link to={`${routine.id}`}>{routine.name}</Link>
              <p>{routine.goal}</p>              
            </div>
          ) 
        }) : <p>No routines to display at this time</p>
        }
    </div>
  )
}

export default RoutinesMy;