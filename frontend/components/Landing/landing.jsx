import React from 'react';
import { Link } from 'react-router-dom';
import {cactus} from './images';



class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render(){
 console.log(cactus);
  return(
    <div className="main-page-container">
      <div className="main-banner">
        <div className="main-banner-container">
        <div className="image-container"> 
          <div className="image-text">
              <h1>Discover the world's top designers & creatives</h1>
              <p>Scribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>
          </div>
          <img src={cactus.img} className='main-page-img'/> 
        </div>
        <div className="image-credit">
          <p>Art by </p>
        </div>
      </div>
      </div>
    </div>
  )   
  }
}



export default LandingPage;
