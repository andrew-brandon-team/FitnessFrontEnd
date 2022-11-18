import { Link, useOutletContext } from 'react-router-dom';

const Activities = () => {
  const {activitiesObj: [activities, setActivities]} = useOutletContext();
  const reverseActivities = [...activities].reverse();
  return (
    <div className="products-page-container">

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

        reverseActivities && reverseActivities.length ? reverseActivities.map((activity, idx) => {

                return <div className="preview-item" key={idx}>
                    
                    <Link to={`/activity/${activity.id}`}><span><b>{activity.name}</b></span></Link>

                    <p><span>{activity.description}</span></p>
                    </div>

                }) : <p>No activities to display at this time</p>
        } 
    </div>
)
};

export default Activities;