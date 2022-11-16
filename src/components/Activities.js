import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Activities = () => {
  const {activitiesObj: [activities, setActivities]} = useOutletContext();
  const reverseActivities = [...activities].reverse();
  return (
    <div className="products-page-container">
        <br />

        {/* <div className="create-or-search">
            {/* Add New Activity */}
            {/* <Link to="/addPost" >
                <button >
                    Add New Activity
                </button>
            </Link>
            <br />
            
            <Link to="/searchbar">
                <button className="searchbar-button">Search for Post</button>
            </Link> */}

        {/* </div> */} 
        {/* Posts, by most recent */}
    {
        reverseActivities && reverseActivities.length ? reverseActivities.map((product, idx) => {
                // console.log(activity.title);
                return <div className="activity" key = {idx}>
                    <Link to={`/activities/${activity._id}`}><span className="name-detail"><b>{activity.title}</b></span></Link>
                    <p><span className="price-detail">{activity.price}</span></p>
                    </div>
                }) : <p>No activities to display at this time</p>
        } 
    </div>
)
};

export default Activities;