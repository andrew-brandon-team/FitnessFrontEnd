import { useOutletContext, useNavigate } from "react-router-dom"


const Logout = () => {
  const {loggedInObj: [isLoggedIn, setIsLoggedIn]} = useOutletContext();
  const navigate = useNavigate();

  function logMeOut() {
    setIsLoggedIn(false)
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div>
      <button className="logout-bttn" type="submit" onClick={logMeOut}>Logout</button>
    </div>
  )
}

export default Logout;