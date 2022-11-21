import { Link, useOutletContext } from 'react-router-dom';

const Activities = () => {
  const {activitiesObj: [activities, setActivities]} = useOutletContext();
  const reverseActivities = [...activities].reverse();
  return (
    <div>
        <div className="product-title">Activities</div>
        <div className="products-page-container">


            {

            reverseActivities && reverseActivities.length ? reverseActivities.map((activity, idx) => {

                    return <div className="preview-item" key={idx}>
                        
                        <Link to={`/activity/${activity.id}`}><span><b>{activity.name}</b></span></Link>

                        <p><span>{activity.description}</span></p>
                        </div>

                    }) : <p>No activities to display at this time</p>
            } 
        </div>
    </div>

)
};

export default Activities;