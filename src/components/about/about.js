import React from 'react'
import './about.css'
import Footer from './../../footer/footer'

function About() {
  const memberData=[
    {
      image:'https://satishnepal.gitlab.io/shaper/assets/images/team/team1.png',
      name:"Dahlia Moore",
      poistion:"Senior Manager"
    },
    {
      image:'https://satishnepal.gitlab.io/shaper/assets/images/team/team2.png',
      name:"Jhone Digo",
      poistion:"Marketing"
    },
    {
      image:'https://satishnepal.gitlab.io/shaper/assets/images/team/team3.png',
      name:"Zara Tingo",
      poistion:"Senior Manager"
    },
    {
      image:'https://satishnepal.gitlab.io/shaper/assets/images/team/team4.png',
      name:"David Zone",
      poistion:"Senior Manager"
    },

  ]
  return (
    <div className='about-shapers'>
      <div className="about-mainheader">SHAPERS</div>
      <h6 className='about-header'> MEET OUR SHAPERS</h6>
      <h5 className='about-title'> Shapers</h5>
      <p className='about-para'> There are various of team member working 
      in Shapers community for building one of the top rated companies around 
      the nation</p>
      <div className="members">
          {memberData.map((user)=>
          (
            <div className="each-member">
          <img src={user.image} alt="memberpicture" className='member-img' />
          <h3 className='member-name'>{user.name}</h3>
          <p className='member-position'>{user.poistion}</p>
          </div>
          ))}
        </div>
        <Footer/>
    </div>
  )
}

export default About