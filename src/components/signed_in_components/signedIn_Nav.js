import React , { useState }  from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Alert } from "react-bootstrap"



  

const SignedInNav = () => {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

  async function handleLogout() {
    setError("")
    console.log(currentUser)
    
    try {
        await logout()
        history.push("/")
      } catch {
        setError("Failed to log out")
      }
  }
     return(
        <div>
            <nav className='nav fixed-top justify-content-center w-100 p-2 bg-dark row'>

    
                <Link className='btn text-light' to='/dashboard'>Dashboard</Link>
                <Link className='btn text-light' to='/create-new-user'>Create User</Link>    
                <Link className='btn text-light' to='/update-profile'>Update Profile</Link>
                <btn className='btn text-light' onClick={handleLogout}>Log Out</btn>
                       
                
            </nav>
            {error && <Alert variant="danger">{error}</Alert>}
        </div>
    );
}

export default SignedInNav;