import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import './slider.css'
import {FiPlay} from 'react-icons/fi';


// import img4 from '../../images/4.jpg'

function slider() {
  return (
    <div className='slider'>
    <Carousel>
  <Carousel.Item interval={8000}>
  <div className="overlay">
</div>
    <img 
      className="d-block w-100 "
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption className='caption'>
      <h5>We are here to help all of us</h5>
      <h1>Digital Terai</h1>
      <p>It is a long established fact that a reader will be 
        distracted by the readable content of a page when looking 
        at its layout.</p>
        <button className='button buttons'>Discover More</button>
          <button className='button buttons'>
            <FiPlay /> Play Video
          </button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={8000}>
    <div className="overlay">

    </div>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={8000}>
  <div className="overlay">
      
      </div>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </div>
  )
}

export default slider