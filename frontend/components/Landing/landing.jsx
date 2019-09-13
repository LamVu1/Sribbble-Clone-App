import React from 'react';
import { Link } from 'react-router-dom';
import { image } from './images';



class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.getImage=this.getImage.bind(this);
  }


  getImage(){
    return(Math.floor(Math.random()*2))}


  render() {
    const idx= this.getImage();
    return (
      <div className="main-page-container">
        <div className="main-banner" style={{backgroundColor: image[idx].color}}>
          
          <div className="main-banner-container">
            <div className="image-container">
              <div className="image-text">
                <h1>Discover the world's top designers & creatives</h1>
                <p>Scribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>
              </div>
              <img src={image[idx].img} className='main-page-img' />
            </div>

          </div>
          <div className="image-credit-container">
            <div className="image-credit">
              <p>Art by {image[idx].author}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}



export default LandingPage;
