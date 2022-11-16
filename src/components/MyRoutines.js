import React, {useEffect, useState} from 'react';
import { useOutletContext } from 'react-router-dom';

const MyRoutines = () => {
  const [userRoutines, setUserRoutines] = useState([]);
  const {routinesObj: [routines, setRoutines]} = useOutletContext();

    useEffect(()=> {
      async function viewUserRoutines () {
        try {
          const response = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/users/albert/routines', 
          {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          
          const data = await response.json();
          setUserRoutines(data.data.routines)
        } catch (error) {
          console.log(error);
        }
        viewUserRoutines();
    }


  },[])

  return(
    <div>
      {userRoutines && userRoutines.length ? userRoutines.map((routine, idx) => {
        return (
          <div>
            <div key = {idx}>
              <Link to={`/routines/${routine._id}`}>
                <span><b>{routine.title}</b></span>
              </Link>
            </div>
          </div>
        )
      }) : <p>No routines to display at this time</p>

    }
    </div>
  )
}

export default MyRoutines;