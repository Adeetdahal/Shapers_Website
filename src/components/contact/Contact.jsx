import React from 'react'
import './contact.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {IoLocationSharp} from 'react-icons/io5'
import {MdEmail} from 'react-icons/md'
import {FaBusinessTime} from 'react-icons/fa'

import Footer from '../../footer/footer'
import MapContainer from './MapContainer'

const Contact = () => {
  return (
    <div className='main_contact'>
        <div className="top_div">
        <div className="fc">
        <div className="form_div">
            <h5 className='title_form'>Contact Form</h5>
            <hr/>
            <div className='contact_form'>
              <input type="text" placeholder='Your Name' className='inputs'/>
              <input type="text" placeholder='Your Subject' className='inputs' />
              <input type="text" placeholder='Your Email' className='inputs' />
              <input type="text" placeholder='Your Phone' className='inputs'/>
            </div>
            <textarea placeholder='Your Message' rows={8} className='inputs_text'/>
            <div className='t_b'><button className='submit_btn'>Submit Message</button></div>
            </div>
          </div>
          <div className="ci">
          <div className="contact_info">
            <div className="title_contact">
              <h5 className='title_info'>Contact Info</h5>
              <hr/>
            </div>

          </div>
          <div className="informations">
            <div className="location">
              <div className="icon"><IoLocationSharp size={30}/></div>
              <div className="texts">
              <div className="title_i">Location</div>
                <div className="des">
                Kathmandu, Nepal
                </div>
              </div>
            </div>
            <div className="location">
              <div className="icon"><BsFillTelephoneFill size={30}/></div>
              <div className="texts">
              <div className="title_i">Call Us</div>
                <div className="des">
                +977 987456321<br/>
                +977 123654789
                </div>
              </div>
            </div>
            <div className="location">
              <div className="icon"><MdEmail size={30}/> </div>
              <div className="texts">
              <div className="title_i">Mail Us</div>
                <div className="des">
                Info@Wbsite.Com<br/>
                Contact@Domain.Com
                </div>
              </div>
            </div>
            <div className="location">
              <div className="icon"><FaBusinessTime size={30}/></div>
              <div className="texts">
              <div className="title_i">Office Hour</div>
                <div className="des">
                Monday-Friday (9:00-19:00)<br/>
                Sunday-Thursday (10:00-6:00)
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="map_div">
          <MapContainer/>
        </div>
        <Footer/>
    </div>

    
  )
}

export default Contact