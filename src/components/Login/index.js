// import {Component} from "react"
import { Link,useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react'
// import Cookies from 'json-cookie'
import './index.css'

const Login=()=>{
    const [name, setName] = useState("")
    const [pass, setPassword] = useState("")
    const [errMsg,setError]=useState("")
    // const [error,setError]=useState('')
    const navigate = useNavigate()

    const submitting=(event)=>{
        event.preventDefault()
        // const {username,password}={username,password}
        // const userDetails=(username,password)
        const data=JSON.parse(localStorage.getItem('users'))
    if(!data){
     return setError("Sorry your not Registered")
    }
    if(data.name===name && data.password===pass){
        return navigate('/home',{replace:true})   
       
    }
     return setError('Invalid Login credintials')

        
    }
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem('users'))
        if(data){
            return navigate('/home',{replace:true})   
           
        }
    })
    
  
    return(
      
        <div className="login-bg">
            <form onSubmit={submitting}>
                <img src="https://res.cloudinary.com/dvuslk2d9/image/upload/v1761021905/logo_bnckhj.png" className="img-logo" alt="logo"/>
                <div>
                    <label htmlFor="inputs1">Name:</label>
                    <input type="text" className="inputs" id="inputs1" value={name} placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>
                    <label htmlFor="inputs2">Password:</label>
                    <input type="password" className="inputs" id="inputs2" value={pass}  placeholder="Enter Your Password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="login-button">
                Login
                </button>

                <span className="sign-up">
                    <Link as='a' to='/signup'>signup</Link></span>
                    <p className="error">{errMsg}</p>
            </form>

        </div>
    )
}
export default Login







    



