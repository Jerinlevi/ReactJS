import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import './index.css'

export default function Footer(){

    return(
        <footer className='footer'>
        <div className="footer-section">
            <div className="footer-first">
                <div>
            <h1>Be the First to Know</h1>
            <p>Sign up for updates from JXStore</p>
            <div>
            <input type='text' className='input-footer' placeholder='Enter your e-mail...'/>
            <button className='footer-bu1'>SUBSCRIBE</button>
            </div>
            </div>
            <div className='footer-sub'>
                <h1>CONTACT US</h1>
                <p>+91 XXXXXX3600</p>
                <p>jerinxxxx@gmail.com</p>
                <h1>Currency</h1>
                <div>
                    <img src="https://www.shutterstock.com/image-vector/usa-button-flag-600nw-320334968.jpg" className='footer-ima' alt="usd"/>
                 
                    <h4>USD</h4>
                
                </div>
                <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
            </div>

                </div>
                <hr className='line'/>
                <div className='footer-second'>
                    <div className='second-sub'>
                        <h2>JXStore</h2>
                        <ul className='second-list1'>
                            <li > <a href='about'>About Us</a></li>
                            <li><a href='stores'>Stores</a></li>
                            <li><a href='artisans'>Artisans</a></li>
                            <li><a href='boutiques'>Boutiques</a></li>
                            <li><a href='contactUs'>Contact Us</a></li>
                            <li><a href='docs'>EU Compliances Docs</a></li>
                        </ul>
                    </div>
                    <div className='second-sub'>
                        <h2>QUICK LINKS</h2>
                     <ul className='second-list1'>
                            <li > <a href='order'>Orders & Shipping</a></li>
                            <li><a href='seller'>Join/Login as a Seller</a></li>
                            <li><a href='payment'>
                            Payment & Pricing</a></li>
                            <li><a href='refund'>Return & Refunds</a></li>
                            <li><a href='faqs'>FAQs</a></li>
                            <li><a href='policy'>Privacy Policy</a></li>
                            <li><a href='t&c'>Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div>

                        <h1>FOLLOW US</h1>
                        <div className="footer-icons">
                        <FaInstagram style={{height:'80px'}}/>
                        <CiLinkedin style={{height:'80px', marginLeft:'10px'}}/>
                        </div>
                        <div>
                            <h2>JXStore accepts</h2>
                            <div>
                                <img src="https://static.vecteezy.com/system/resources/previews/021/515/020/non_2x/google-pay-logo-symbol-design-illustration-free-vector.jpg" className="ima-footer" alt='upi-links'/>
                                <img src="https://images.seeklogo.com/logo-png/33/2/phonepe-logo-png_seeklogo-339867.png" className="ima-footer" alt='upi-links'/>
                                <img src="https://cdn.vectorstock.com/i/1000v/19/28/mastercard-logo-debit-credit-card-icon-vector-51681928.jpg" className="ima-footer" alt='upi-links'/>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKiywFfwl0d3dpNly_Iiypx_HrrGkH5UkOCg&s" className="ima-footer" alt='upi-links'/>
                                <img src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-icon-svg-download-png-226448.png?f=webp" className="ima-footer"  alt='upi-links'/>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="copyright">

                <p>Copyright © 2025 JXStore. All rights reserved.</p>
                </div>
        </div>
    </footer>
    )
  

}
Footer()