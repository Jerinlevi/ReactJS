import { Navigate} from "react-router-dom"

const ProtectedRoute=({children})=>{

const data=JSON.parse(localStorage.getItem('users'))
if(!data){
return <Navigate to='/' replace/>
}
return children

}
export default ProtectedRoute