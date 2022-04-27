import React from 'react'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGoogle } from 'react-icons/ai'
import './footer.css'
import {GoPrimitiveDot} from 'react-icons/go'

function footer() {
return (
    <div>
        <div className="footer-container">
        <div className="left-side">
            <img src="" alt="logo" className='imglogo' />
            <p className='footer-para'>There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, 
                by injected humour, or randomised words which don't look even 
                slightly believable.</p>
        </div>
        <div className="middle-side">
            <div className="list-middle">
            <div className="ul-main"><GoPrimitiveDot/><h6 className='ol-item'>HOME</h6></div>
            <div className="ul-main"><GoPrimitiveDot/><h6 className='ol-item'>PAST PROJECTS</h6></div>
            <div className="ul-main"><GoPrimitiveDot/><h6 className='ol-item'>PUBLICATIONS</h6></div>
            <div className="ul-main"><GoPrimitiveDot/><h6 className='ol-item'>IMPACT</h6></div>
            <div className="ul-main"><GoPrimitiveDot/><h6 className='ol-item'>OUR BLOG</h6></div>
            <div className="ul-main"><GoPrimitiveDot/><h6 className='ol-item'>OUR NEWS</h6></div>
            </div>
        </div>
        <div className="right-side">
            <h3 className='footer-header'>Follow Us</h3>
            <div className="footer-icons">
            <a href='#'>
            <AiOutlineFacebook  size={25} className="footer-icon"/>
            </a>
            <a href='#'>
            <AiOutlineTwitter  size={25}  className="footer-icon"/>
            </a>
            <a href='#'>
            <AiOutlineLinkedin  size={25} className="footer-icon"/>
            </a>
            <a href='#'>
            <AiOutlineGoogle  size={25} className="footer-icon"/>
            </a>
            
            </div>
        </div>
    </div>
    </div>
)
}

export default footer