import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({})
  console.log(currentProfile)
  useEffect(() => {
    if (localStorage.getItem("token")) {
      async function fetchUserData() {
        try {
          const response = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/users/me', 
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          );
          const userData = await response.json();
          setCurrentProfile(userData)
        
        } catch (error) {
          console.log(error);
        }
      }
      fetchUserData();
    }
    async function fetchActivitiesData() {
      try {
        const response = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/activities', 
        {
          headers: {'Content-Type': 'application/json',
          },

        }
        );
        const activitiesData = await response.json();
        setActivities(activitiesData)
        // console.log(activitiesData)
        // setActivities(activitiesData.data.activities);
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchActivitiesData();

    async function fetchRoutinesData() {
      try {
        const response = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/routines', 
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
        );
        const routinesData = await response.json();
        console.log(routinesData)
        setRoutines(routinesData);
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchRoutinesData();

  }, [])
  return (
    <div>
      <Navbar />
      <h1>
        Fitness Tracker
      </h1>
      
      <br />

      <Outlet context={{
          routinesObj: [routines, setRoutines],
          activitiesObj: [activities, setActivities],
          profileObj: [currentProfile, setCurrentProfile]
        }} />

      <br />


    </div>
  )
}

export default App;