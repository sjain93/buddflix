import React from 'react';
import { Slide } from 'react-slideshow-image';
import strain from '../strain.jpg';
import welcome from '../welcomeBanner.png';
import Avengers from '../Avengers.png'
import './Slideshow.scss';

const slideImages = [
  welcome,
  strain,
  Avengers
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
          </div>
        </div>
      </Slide>
    )
}
export default Slideshow;