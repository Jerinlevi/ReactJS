import {Component} from "react"
// import Cookies from 'json-cookie'

class SignIn extends Component{
state={name:'',password:''}

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
    const userDetails=(username,password)
    localStorage.setItem('users',JSON.stringify(userDetails))
    
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
                SignIn
                </button>
            </form>

        </div>
    )
}
}
export default SignIn