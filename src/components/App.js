import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({})

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     async function fetchUserData() {
  //       try {
  //         const response = await fetch ('https://fitnesstrac-kr.herokuapp.com/api/activities', 
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: `Bearer ${localStorage.getItem("token")}`,
  //             },
  //           }
  //         );
  //         const userData = await response.json();
  //         setCurrentProfile(userData.data)
        
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     fetchUserData();
  //   }
  // })
  return (
    <div>
      <h1>
        Fitness Tracker
      </h1>

      <Navbar />

      <Outlet context={{
          profileObj: [currentProfile, setCurrentProfile]
        }} />

      <footer>
        Developed with love by some guys.
      </footer>
    </div>
  )
}

export default App;