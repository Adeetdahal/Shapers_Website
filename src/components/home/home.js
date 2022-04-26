import React from 'react'
import Slider from '../slider/slider'
import './home.css'
import featuresData from '../../constants/feturesData'
import {MdOutlineFormatQuote} from 'react-icons/md'
import {FiPlay} from 'react-icons/fi';
import quotationData from '../../constants/quotationData'

const home = () => {
return (
    <div className='main-home'>
        <Slider/>
        <div className="container">
    <div className="container-image">
    <img src="https://dummyimage.com/550x400/000/fff" alt="imagetobeadded" 
    className='img550'/>
    </div>
    <div className='defn'>
        <div className="defn-main">
        <div className="defn-line"></div>
        <div className="defn-topic">
        <h5 className='defn-title'>&nbsp;EVERY DAY BRINGS NEW CHALLENGES </h5>
        </div>
        </div>
        <h2 className='defn-slogan'>Company's Slogan Goes Here</h2>
        <p className='defn-description'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
    </div>
    </div>
    <div className="features">
    <div className="feat-title">
        Our Features
    </div> 
    <div className="main-features">
    {featuresData.map((feat,index)=>(
        <div className='feat-items' key={index}>
            <img src={feat.image} alt="featuresImages" className='img70'/>
            <h3 className='feat-heading'>{feat.title}</h3>
            <p className='feat-para'>{feat.desc}</p>
        </div>
    ))}
    </div>
    </div>
    <div className="quotation">
        {quotationData.map((quote,index)=>(
            <div className='quote-items'key={index}>
                <MdOutlineFormatQuote size={55}/>
        <p className='quote-para'>{quote.para}
        </p>
        <h4 className='quote-header'>{quote.person}</h4>
        <p className='quote-intro'>{quote.intro}</p>
            </div>
        ))}
    </div>
    <div className="foot-container">
        <div className="foot-items">        
    <button className='foot-button'>
            <FiPlay />
    </button>
    <h5 className='foot-header'>CREATE YOUR OWN EXPERIENCE</h5>
    <h2 className='foot-header'>How Do We Help You To Grow?</h2>
    <p className='foot-para'>There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration in some form.</p>

    </div>

    </div>
    <div className="footer-container">
        
    </div>
    </div>
)
}

export default home