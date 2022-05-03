import React from 'react'
import './shaper.css'
import {AiFillFacebook, AiOutlineInstagram, AiOutlineGlobal, AiFillLinkedin} from 'react-icons/ai'
import Footer from './../../footer/footer'

const Shaper = () => {
return (
    <div>
        <div className="main-shaper">
            <h1 className="shaper-title">
                Global Shapers Kathmandu Hub 2021
            </h1>
            <div className="shaper-main-para">
            <p className="shaper-para">
            The Global Shapers Community is a network of city-based Hubs developed 
            and led by young leaders who want to develop their leadership potential 
            towards serving society. To that end, Hubs undertake local projects to 
            improve their communities. The Global Shapers Community is one of 
            several multi-stakeholder communities at the World Economic Forum. 
            Meet some of the Global Shapers at <a href="https://www.youtube.com/watch?v=S_TCp_GcO34&feature=youtu.be" 
            target='blank' className='youtube'>
                YouTube.
                </a>
            </p>
            <p className="shaper-para">
            Through the Global Shapers Community, Shapers are provided with opportunities to 
            connect with the worldwide network of Global Shapers, to network with other World 
            Economic Forum communities, and to represent the voice of youth at World Economic 
            Forum events. Today, there are 444 Hubs across 147 countries with more than 10632 
            Shapers doing work that is changing and shaping their communities in important, 
            impactful ways.
            </p>
            <p className="shaper-para">
            The Global Shapers Community Kathmandu is a registered not for profit organization. 
            The Kathmandu Hub has around 30 members presently that have expertise ranging from 
            banking and entrepreneurship to social activism, and journalism. Using their diverse 
            backgrounds and expertise, the Shapers are committed to making a strong social 
            impact in their community through their projects and initiatives.
            </p>

            <h5 className='follow'>Follow Global Kathmandu Hub </h5>
            <div className="icons">
                <AiFillFacebook size={20} className='i'/>
                <AiOutlineInstagram size={20} className='i'/>
                <AiOutlineGlobal size={20} className='i'/>
                <AiFillLinkedin size={20} className='i'/>
            </div>
            </div>
            <div className="shapers-grid">
                <div className="grid-i">
                    <h5 className="grid-n">
                        ELIGIBILITY:
                    </h5>
                    <hr/>
                    <p className='shapers-p'> You are eligible to apply to Kathmandu Shapers if:</p>
                    <ul className='ol-list'>
                        <li className='li'>You are between 18-27 years old; align with the missions of the larger Global Shapers Community.</li>
                        <li className='li'>Residents of or live close to the hub city, Kathmandu</li>
                        <li className='li'>Committed to working to improve our community.</li>
                        <li className='li'>Interested in developing your leadership potential.</li>
                        <li className='li'>Work well in teams and are collaborative in spirit.</li>
                        <li className='li'>Selections are usually restricted to one Shaper from a single organization and/or family.</li>
                    </ul>
                </div>
                <div className="grid-i">
                    <h5 className="grid-n">
                        ADDITIONAL REQUIREMENTS:
                    </h5>
                    <hr/>
                    <p className='shapers-p'> Should you be selected as Kathmandu Shapers, please note:</p>
                    <ul className='ol-list'>
                        <li className='li'>All freshmen Shapers will go through a probation period.</li>
                        <li className='li'>You significantly contribute to a project to completion in their freshman year in order to remain a Shaper in 2021-2022.</li>
                        <li className='li'>You will be required to complete a new member survey after their selection to confirm their acceptance.</li>
                        <li className='li'>All Kathmandu Shapers are required to attend an annual retreat every year.</li>
                        <li className='li'>Shapers are invited and highly encouraged to join the SHAPE events and apply for WEF events (selection based).</li>
                        <li className='li'>Review and accept our Hub Charter and pledge right after probation period is over.</li>
                        <li className='li'>Submit annual membership fee before joining & annually in every year.</li>
                    </ul>
                </div>
                <div className="grid-i">
                    <h5 className="grid-n">
                    APPLICATION PROCESS AND TIMELINE:
                    </h5>
                    <hr/>
                    <p className='shapers-p'> You are eligible to apply to Kathmandu Shapers if:</p>
                    <ul className='ol-list'>
                        <li className='li'><span className='li-span'> ROUND 1: </span></li>
                        <p className='shapers-p'> Online Application (5-17 September 2021) Please complete the application before 17 September, 2021 After reviewing the application, we will invite finalists to join an interview (We will most probably do a virtual meet).
                        </p>
                        <li className='li'><span className='li-span'> ROUND 2: </span></li>
                        <p className='shapers-p'> Interview - Finalists from Round 1 will be invited to join a virtual interview where members from the leadership team and advisory council will set up a virtual interaction with you to know you better.
                        </p>
                        
                    </ul>
                </div>
            </div>
            <div className="form-fill">
                <h5 className="form-title">
                    Form Fill Up
                </h5>
                <hr style={{color:"darkblue",height:"2px"}}/>
                <p className="form-p">
                Global Shapers Kathmandu Hub reserves the right to reject application at any point without an explanation.
                </p>
                <div className="upper">
                    <div className="f-r">
                <label htmlFor="Full Name">Full Name <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='Name'/>
                    </div>
                    <div className="f-r">
                <label htmlFor="DOB">Date of Birth <sup style={{color:"red"}}>*</sup></label>
                <input type="date" id='DOB'/>
                    </div>
                    <div className="f-r">
                    <label htmlFor="Email">Email <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='Email'/>
                    </div>
                    <div className="f-r">
                    <label htmlFor="Phone">Phone Number <sup style={{color:"red"}}>*</sup></label>
                <input type="number" id='Phone'/>
                    </div>
                </div>
                <label htmlFor="Link">Link to your social media profile <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='Link'/>
                <label htmlFor="employed">If you are currently employed, please state the name of your org <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='employed'/>
                <label htmlFor="expertise">What is your subject area of expertise? (Eg: Media, Education, Health, Finance, Business etc.)<sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='expertise'/>
                <label htmlFor="skills">List out your three best skills (seperated by , ) <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='skills'/>
                <label htmlFor="knowing">How did you get to know about Global Shapers Kathmandu Hub? (Mention the name of the person, if any) <sup style={{color:"red"}}>*</sup></label>
                <input type="text" id='knowing'/>
                <label htmlFor="involve">Have you been involved in other group/communities? Have you led or have been a part of any initiative through the group? Share your experience (150 words or less)* <sup style={{color:"red"}}>*</sup></label>
                <textarea name="involve" id="involve" cols="30" rows="4" style={{color:"grey"}}>Your Experience</textarea>
                <label htmlFor="join">Why do you want to join our community? (100 words or less) <sup style={{color:"red"}}>*</sup></label>
                <textarea name="join" id="join" cols="30" rows="4" style={{color:"grey"}}>Your Cause</textarea>
                <label htmlFor="impact">Global Shapers are supposed to run social impact projects in their respective cities. If you had had the chance to lead a project what would it be and why? (100 words or less) <sup style={{color:"red"}}>*</sup></label>
                <textarea name="impact" id="impact" cols="30" rows="4" style={{color:"grey"}}>Your Thoughts</textarea>
                <label htmlFor="hours">If selected, how many hours per week will you be able to commit to hub activities?<sup style={{color:"red"}}>*</sup></label>
                <select name="hours" id="hours" style={{height:"45px"}}>
                <option value="1">1-5</option>
                <option value="6">6-10</option>
                <option value="11">11-15</option>
                <option value="15">15+</option>
                </select>
                <label htmlFor="cv">Please upload your updated CV here <sup style={{color:"red"}}>*</sup></label>
                <input type="file" id="myFile"/>
                <div className='t_b'><button className='submit_btn'>Submit Form</button></div>

            </div>
        </div>
        <Footer/>
    </div>
)
}

export default Shaper