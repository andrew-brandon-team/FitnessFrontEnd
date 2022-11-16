import React, {useState, useEffect} from 'react';
import {useOutletContext, useParams} from 'react-router-dom';
// import DeleteActivity from './DeleteActivity';

const ActivityDetails = () => {
  const {activitiesObj: [activies, setActivities]} = useOutletContext;
  const {profileObj: [currentProfile, setCurrentProfile]} = useOutletContext();
  const [toggleEdit, setToggleEdit] = useState(false);
  const {id} = useParams();
  const reverseActivities = [...activies].reverse();
  const [acitvity, setActivity] = useState({});

  useEffect(() => {
    const filteredActivities = activities.filter((singleActivity) => {
      return id === singleActivity._id;
    });
    setActivity(filteredActivities[0]);
  }, []);

  function changeToggleEdit() {
    toggleEdit ? setToggleEdit(false) : setToggleEdit(true);
  }

  if (acitvity._id) {
    return (
      <div>
        <div>
          <p>{acitvity.name}</p>
          <br />
          <p>
            {acitvity.description}
          </p>
        </div>

        <div>
          <button onClick={changeToggleEdit} className="details-bttn">
            Edit
          </button>

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