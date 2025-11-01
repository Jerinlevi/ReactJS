import { CiSearch,CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
// import {Link} from 'react-router-dom'
import './index.css'

const Header=()=>{


    return(
            <div className="header-bg">
                <div className="blacky"></div>
                <header className="header-section">
                <img
          src="https://res.cloudinary.com/dvuslk2d9/image/upload/v1761021905/logo_bnckhj.png"
          className="header-logo"
          alt="logo"
        />
<div className="web-title">
    <h1 style={{
        fontFamily:'monospace'
    }}>JXStore</h1>
</div>
        <div className="header-icons">
            <div className="icons">
        <CiSearch/>
        <CiHeart />
        <BsBag/>
        <RxAvatar/>
        </div>
        <select>
            <option>ENG</option>
            <option>TAM</option>
            <option>HIN</option>
            <option>FRE</option>
            <option>MAL</option>
        </select>
        </div>
                </header>
                <nav>
                    <div className="nav-items">
                        <p>SHOP</p>
                        <p>SKILLS</p>
                        <p>STORIES</p>
                        <p>ABOUT</p>
                    
                        <p>CONTACT US</p>
                       
                    </div>
                </nav>
                <hr/>
                <div className="header-title">
                    <h1>DISCOVER OUR PRODUCTS</h1>
                    <p>Explore a world of style, innovation, and quality at JXStore.
Discover handpicked products that blend comfort, creativity, and value — from everyday essentials to exclusive collections.
Shop smarter, faster, and better — all in one place.</p>
            
                </div>
            </div>

    )
}
export default Header