import React, {useState, useEffect} from 'react';
import { useParams, useOutletContext, useNavigate } from 'react-router-dom';
import ActivityDelete from './ActivityDelete';


const ActivityEdit = (activity) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")
  const {activitiesObj: [activities, setActivities]} = useOutletContext();
  const {id} = useParams();
  const navigate = useNavigate();


  function changeName (event) {
    setName(event.target.value)
  }

  function changeDescription (event) {
    setDescription(event.target.value)
  }

  async function formSubmit (event) {
    event.preventDefault()
    try {
      const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/activities/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "PATCH",
        body: JSON.stringify({
          name: name,
          description: description
        })
      })
      const otherResponse = await fetch("http://fitnesstrac-kr.herokuapp.com/api/activities")
      const otherData = await otherResponse.json();
      console.log(otherData)
      setActivities(otherData)
      navigate('/activities')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      Activity Edit Form:
      <form onSubmit={formSubmit}>
        <label>
          Activity Name:
        </label>
        <br />
        <input onChange={changeName} value={name} type='text'>
        </input>
        <br />

        <label>
          Description:
        </label>
        <br />
        <input onChange={changeDescription} value={description} type='text'>
        </input>
        <button type="submit">Update Activity</button>
        <br />
        <br />
        <ActivityDelete />

      </form>
    </div>
  )
}

export default ActivityEdit;