import React, {useState, useEffect} from 'react';
import {useOutletContext, useParams, Link} from 'react-router-dom';
import {FcSportsMode} from 'react-icons/fc'
// import DeleteActivity from './DeleteActivity'


const ActivityDetails = () => {
  const {activitiesObj: [activities, setActivities]} = useOutletContext();
  const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext();
  const [toggleEdit, setToggleEdit] = useState(false);
  const {id} = useParams();
  const reverseActivities = [...activities].reverse();
  const [activity, setActivity] = useState({});

  useEffect(() => {
    if (activities.length) {
      const filteredActivities = activities.filter((singleActivity) => {
        return id == singleActivity.id;
      });
      console.log('filtered', filteredActivities)
      setActivity(filteredActivities[0]);
      console.log(activities)
    }
  }, [activities]);

  function changeToggleEdit() {
    toggleEdit ? setToggleEdit(false) : setToggleEdit(true);
  }

  console.log(activity)
  // console.log(activity.name)

  if (activity.id) {
    return (
      <div>
        <div className="details-container">
          <p className="details-logo"><FcSportsMode /></p>
          <p className="details-name">Name: {activity.name}</p>
          
          <br />
          <p className="details-more">Description: 
            {activity.description}
          </p>

          <Link className="details-more" to="edit-activity">
            <button onClick={changeToggleEdit} className="details-bttn">
            Edit
          </button></Link>
          <br />
        </div>

        <div>


          {/* {toggleEdit ? <EditActivity product={product} /> : null} */}
        {/* <button>Delete</button> */}
        {/* {toggleEdit ? <DeletePost product={product} /> : null} */}

        </div>




      </div>
    )
  }

  return (
    <div>
      .
    </div>
  )
}

export default ActivityDetails;