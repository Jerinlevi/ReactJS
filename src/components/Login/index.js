import {Component} from "react"
import { Link } from "react-router-dom"
// import Cookies from 'json-cookie'

class Login extends Component{
state={name:'',password:'',errMsg:''}

componentDidMount(){
this.submitting()
}

name=(event)=>{
    this.setState({name:event.target.value})
}
password=(event)=>{
    this.setState({password:event.target.value})
}

submitting=async(event)=>{
    event.preventDefault()
    const {username,password}=this.state
    // const userDetails=(username,password)
    const data=JSON.parse(localStorage.getItem('users'))
if(!data){
 this.setState({errMsg:"Sorry UserDetails Invalid or Not Registered"})
}
if(data.username===username && data.password===password){
    const {history}=this.props
    history.replace('/home')
}
    
}

    


render(){
    return(
        <div className="login-bg">
            <form onSubmit={this.submitting}>
                <img src="https://res.cloudinary.com/dvuslk2d9/image/upload/v1761021905/logo_bnckhj.png" className="img-logo"/>
                <div>
                    <input type="text" placeholder="Enter Your Name" onChange={this.name}/>
                    <input type="password" placeholder="Enter Your Password" onChange={this.password}/>
                </div>
                <button type="submit">
                Login
                </button>

                <span>
                    <Link as='a' to='/SignIn'>SignIn</Link></span><p>{errMsg}</p>
            </form>

        </div>
    )
}
}
export default Login