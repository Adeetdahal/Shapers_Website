import React from 'react'
import './impacts.css'
import { Link } from 'react-router-dom'
import {TiTick} from 'react-icons/ti'
import Footer from './../../../footer/footer'
import {AiFillFacebook, AiFillTwitterSquare,AiOutlineGoogle} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'

const Impacts = () => {
    const impact = [
        {
            img:"https://dummyimage.com/200x150/000/fff",
            title: "Climate and Environment Education Curriculum",
            time: "2019 - ongoing"
        },
        {
            img:"https://dummyimage.com/200x150/000/fff",
            title: "Climate and Environment Education Curriculum",
            time: "2019 - ongoing"
        },
        {
            img:"https://dummyimage.com/200x150/000/fff",
            title: "Climate and Environment Education Curriculum",
            time: "2019 - ongoing"
        },
    ]


  return (
    <div className='pd_main'>
        <div className="pd_top">
        <div className="left_top_pd">
          <h1 className='left_head'>Environmental Leaders Talk Series (ELTS) </h1>
          <p className='left_des'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rem atque, veniam inventore incidunt molestias ab. Omnis voluptate, modi, harum soluta illum neque doloremque asperiores deleniti consectetur nostrum, qui minus reprehenderit earum. Cumque, atque reiciendis minus vero ad nesciunt ipsam! Id aliquid assumenda est blanditiis aut cum iste quod suscipit.</p>
        </div>
        <div className="right_top_im">
          <img className='right_im' src='https://satishnepal.gitlab.io/shaper/assets/images/portfolio/project-details.jpg' alt='600X400'/>
          <div className="p_info">
            <div className="pro_i">Project info</div>
            <div className="hrs"></div>
           
            <div className="info_pb">

            <p className="pb">Projects By: <Link to='#' className='sh_link'> Shapers</Link> </p>
            <p className="date">Date:<span> June 21, 2023</span></p>
            <p className='date'>Location: <span> Kathmandu</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className="pd_mid">
          <div className="impact_head">
              <h2 className="impact_title">
                  Impacts
              </h2>
          </div>
          <div className="i_boxes">
              {impact.map((im, index) => (
                  <div className="i_box" key={index}>
                      <img src={im.img} alt="impact" className="d_img" />
                      <h2 className='i_box_title'>{im.title}</h2>
                      <p className="i_box_time">{im.time}</p>
                  </div>
              ))}
          </div>
      </div>
      <div className="pd_share">
          <p className="pd_info">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet deleniti laborum nihil rerum non, eos accusantium modi doloremque atque! Cum similique odit quisquam, id perferendis eius itaque incidunt quasi aliquid dolorem earum quod exercitationem a! Vel voluptate mollitia aperiam exercitationem voluptatem ea consequatur quaerat minus necessitatibus labore id, suscipit aliquid.
          </p>
          <div className="tick">
               <div className="tick_1">
                   <TiTick size={20}/> The organization is just beginning to operate in the market, implementing some projects. Our team of global experts help you achieve sustainable.
                   </div> 
                   <div className="tick_1">
<TiTick size={20}/>Customer-focused businesses build a virtuous cycle we call the "customer wheel." We help you at every stage of growth, developing custom solutions and collaborating with all levels of your organization.
                   </div>
                   <div className="tick_1">
<TiTick size={20}/>We help you at every stage of growth.
                   </div>
          </div>
          <div className="share">
              <p className="share_this">
                  Share This
              </p>
              <div className="icon_share">
                <div className="icon_s">
                    <AiFillFacebook size={25}/>
                    </div> 
                 <div className="icon_s">
                     <AiFillTwitterSquare size={25}/>
                     </div> 
                <div className="icon_s">
                      <AiOutlineGoogle size={25}/>
                    </div>                
                 <div className="icon_s">
                      <BsPinterest size={25}/>
                     </div>
              </div>
          </div>
      </div>
      <Footer/>

    </div>
  )
}

export default Impacts