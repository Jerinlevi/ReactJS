import { Redirect, Route } from "react-router-dom"

const ProtectedRoute=(props)=>{

const data=JSON.parse(localStorage.getItem('users'))
if(data){
return <Redirect to='SignIn'/>
}
return <Route {...props}/>

}
export default ProtectedRoute