import {Link} from 'react-router-dom'
import './index.css'
const Failure=()=>{
    return(
        <div className="failure-bg">
            <div>
                {/* <img src="https://t4.ftcdn.net/jpg/16/59/07/31/360_F_1659073148_FRNh1byqVq9lD6mD5fK4nyHEYlusK6FS.jpg" className='failure-image'/> */}
                {/* <h1>404 Not Found</h1> */}
                <p className='para-failure'>Sorry, this Page  is Unavailable</p>
                <Link to='/home'>
                <button className='failure-bu'>
                    Go to Home
                </button>

                </Link>
            </div>
        </div>
    )

}
export default Failure