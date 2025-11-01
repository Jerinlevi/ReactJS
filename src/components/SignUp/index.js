import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './index.css'

function SignUp() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  // const [error,setError]=useState('')
  const navigate = useNavigate()

  const submitting = (event) => {
    event.preventDefault()
    const userDetails = { name, password }
    // if(JSON.parse(localStorage.getItem('users')).includes(userDetails)){
    //  return setError('Already user Registered')
    // }
    if(name.trim()===" "){
      alert("Please enter Name first")
    }
    if(password.trim()===" "){
      alert("Please enter password")
    }
    else if(name!==undefined && password!==undefined){
      localStorage.setItem("users", JSON.stringify(userDetails))
    navigate("/") 
    alert("Credintials Saved ✅")

    }
  
 }

  return (
    <div className="login-bg">
      <form onSubmit={submitting}>
        <img
          src="https://res.cloudinary.com/dvuslk2d9/image/upload/v1761021905/logo_bnckhj.png"
          className="img-logo"
          alt="logo"
        />
        <div>
          <label htmlFor="input1">UserName:</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="inputs"
            id="input1"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="input2">Password:</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="inputs"
            id="input2"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">SignUp</button>

      </form>
    </div>
  )
}
export default SignUp