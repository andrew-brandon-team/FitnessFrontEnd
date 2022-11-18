import { useOutletContext, useNavigate, useParams } from "react-router-dom";

const ActivityDelete = ({activity}) => {
  const {activitiesObj: [activities, setActivities]} = useOutletContext();
  const navigate = useNavigate();
  const {id} = useParams();

// Removing an activity from a routine - need the routine_activity ID
  async function deleteThisActivity () {
    try {
      const response = await fetch (`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${activity.routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      const deleteData = await response.json();
      console.log("This is the delete activity data", deleteData);
      
      if(deleteData.success) {
        const otherResponse = await fetch ("https://fitnesstrac-kr.herokuapp.com/api/activities")
        const newActivities = await otherResponse.json();
        setActivities(newActivities);
        // navigate('/activities')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <button onClick={(event) => {
        event.preventDefault()
        deleteThisActivity(id)}}>
          Delete Activity
        </button>
    </div>
  )
}

export default ActivityDelete;