import { useOutletContext, useNavigate } from "react-router-dom";

const ActivityDelete = ({activity}) => {
  const {activtyObj: [activities, setActivities]} = useOutletContext();
  const navigate = useNavigate;

  async function deleteThisActivity (id) {
    try {
      const response = await fetch (`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${activity.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
      const deleteData = await response.json();
      console.log("This is the delete activity data", deleteData);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      Delete Activity
    </div>
  )
}

export default ActivityDelete;