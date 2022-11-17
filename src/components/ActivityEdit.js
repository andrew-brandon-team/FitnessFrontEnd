import React, {useState, useEffect} from 'react';


const ActivityEdit = (activity) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("")

  function changeName (event) {
    setName(event.target.value)
  }

  function changeDescription (event) {
    setDescription(event.target.value)
  }

  async function formSubmit (event) {
    event.preventDefault()
    try {
      const response = await fetch(`https://fitnesstrac-kr.herokuapp.com/api/activities/${activity.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          name: name,
          description: description
        })
      })
      const data = await response.json();
      console.log("This is the data: ", data)
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

      </form>
    </div>
  )
}

export default ActivityEdit;