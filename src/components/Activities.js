import { Link, useOutletContext } from 'react-router-dom';
import {FcSportsMode} from 'react-icons/fc'

const Activities = () => {
  const {activitiesObj: [activities, setActivities]} = useOutletContext();
  const reverseActivities = [...activities].reverse();

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
        <div className="product-title"> <FcSportsMode /> Activities <FcSportsMode /> </div>
        <div className="products-page-container">


            {

            reverseActivities && reverseActivities.length ? reverseActivities.map((activity, idx) => {

                    return <div className={classNameAssigner()} key={idx}>
                        
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