import React from 'react';
import './nav.css';
import {MdArrowDropDown} from 'react-icons/md';
// import {Link} from 'react-router-dom';

function nav() {
return (
    <div>
    <div className="main-nav">
        <div className="logo">
            <img src="#" alt="logo" />
        </div>
        <div className="nav-items">
            <div className='list'>Home</div>
            <div className='dropdown'>
                <button className='dropdownbtn list'> About <MdArrowDropDown/></button>
                <div className='dropdown-content'>
                    {/* <Link to='/about'>About Us</Link> */}
                    <a href=""> About Us </a>
                <a href=""> More </a>
                </div>
            </div>
            <div className='list'>Projects</div>
            <div className='list'>Contact</div>
            <div className='dropdown'>
                <button className='dropdownbtn list join'> 
                Join us <MdArrowDropDown/></button>
                <div className='dropdown-content'>
                <a href="">Become a Shaper</a>
                <a href=""> Become a Sponser </a>
                </div>
            </div>
        </div>
    </div>
    </div>
 )
}

export default nav