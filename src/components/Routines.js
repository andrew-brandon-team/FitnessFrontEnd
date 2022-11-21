import React from 'react';
import { Link, useOutletContext} from 'react-router-dom';
import {BiTimer} from 'react-icons/bi'


const Routines = () => {
  const {routinesObj: [routines, setRoutines]} = useOutletContext();
  const reverseRoutines = [...routines].reverse();
  
  //gift to the project by Ser Ian the Glam in exchange for front end assistance
  function classNameAssigner(){
    let input = Math.floor(Math.random()*5)
    if(input>=5) input = input-5;
    switch(input){
      case 0: return "zero-color"
      case 1: return "one-color"
      case 2: return "two-color"
      case 3: return "three-color"
      case 4: return "four-color"
      default: 
        return "default-color"
    }
  }

  return (
    <div>
      <div className="product-title"><BiTimer /> Routines <BiTimer /></div>
      <div className="products-page-container">
      {
      reverseRoutines && reverseRoutines.length ? reverseRoutines.map((routine, idx) => {
          // console.log(routine)
        return <div className={classNameAssigner()} key = {idx}>
            
            <Link to={`/routines/${routine.id}`}><span><b>{routine.name}</b></span></Link>

            {/* <p><span>{routine.goal}</span></p> */}

            </div>
        }) : <p>No routines to display at this time</p>
      } 
    </div>
    </div>

  )
};

export default Routines;