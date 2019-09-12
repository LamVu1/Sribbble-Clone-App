import React from 'react';
import { Link } from 'react-router-dom';




class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render(){
 
  return(
  <div>
    <div className="main-banner">
      <div className="image-container">
    <img src="https://cdn.dribbble.com/assets/art-banners/cactus4x3-00b2c882ddc01c9d5ebe19c886dc2c87bd18ef7aa1cdc1c53980fc305bcecfca.jpg" className='main-nav-logo'/>
      </div>
    </div>
  </div>
  )   
  }
}



export default LandingPage;
