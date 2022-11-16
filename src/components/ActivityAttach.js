import Routines from "./Routines";

const ActivityAttach = () => {
  async function attachActivityToRoutine (event) {
    event.preventDefault()
    try {
      if (!localStorage.getItem('token')) {
        alert("You must be logged in to add a new activity. If you do not have an account, proceed to the registration link on the Login page.")
        return;
      }
      const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/routines/${id}/activities`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          activityID,
          count,
          duration
        })
      });
      // const data = await response.json();
      // setRoutineActivity([...Routines, data])
    } catch (error) {
      console.log(error);
    }
  }

  // function 

  return (
    <div>
      <form>
        <label>Enter Count</label>
        <br />
        <input type="number"></input>
        <br />

        <label>Enter Duration</label>
        <br />
        <input type='number'></input>
        <br />

        <button type="submit">Add Activity</button>
        <br />
        <br />
      </form>
    </div>
  )
}

export default ActivityAttach;