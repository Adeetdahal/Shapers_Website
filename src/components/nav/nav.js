import React from 'react';
import './nav.css';
import {MdArrowDropDown} from 'react-icons/md';
import {Link} from 'react-router-dom';

function nav() {
return (
    <div>
    <div className="main-nav">
        <div className="logo">
            <img src="#" alt="logo" />
        </div>
        <div className="nav-items">
            <div className='list'>
                <Link to="/" className='list-nav'>Home</Link>
            </div>
            <div className='dropdown'>
                <button className='dropdownbtn list'> About <MdArrowDropDown/></button>
                <div className='dropdown-content'>
                    <Link to='/about-us'>About Us</Link>
                    <Link to='/about-shapers'>About Shapers</Link>
                </div>
            </div>
            <div className='dropdown'>
                <button className='dropdownbtn list'> <Link to='/projects'className='list-nav'>Projects</Link> <MdArrowDropDown/></button>
                <div className='dropdown-content'>
                    <Link to='/project-details'>Project Details</Link>
                    <Link to='/project-impacts'>Impact Details</Link>
                </div>
            </div>
            <div className='list'>
            <Link to='/contact' className='list-nav'>Contact</Link>
            </div>
            <div className='dropdown'>
                <button className='dropdownbtn list join'> 
                Join us <MdArrowDropDown/></button>
                <div className='dropdown-content'>
                    <Link to='/become-a-shaper'>Become a Shaper</Link>
                <a href="3"> Become a Sponser </a>
                </div>
            </div>
        </div>
    </div>
    </div>
 )
}

export default nav