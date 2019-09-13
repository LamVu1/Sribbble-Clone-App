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
        <div className="image-container"> 
          <img src={cactus.img} className='main-page-img'/> 
        </div>
      </div>
    </div>
  )   
  }
}



export default LandingPage;
