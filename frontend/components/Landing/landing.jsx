import React from 'react';
import { Link } from 'react-router-dom';
import { image } from './images';



class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.getImage=this.getImage.bind(this);
  }


  getImage(){
    return(Math.floor(Math.random()*5))
  }

  componentDidMount(){
    this.props.fetchPosts()
  }

  render(){
    const idx= this.getImage()
    let posts = Object.values(this.props.posts)
  
    const images = posts.map((url,idx) => {
      return (
          <img className="main-post" key={idx} src={url.imageURL}/>
      );
  }); 
    return (
      <div className="main-page-container">
        <div className="main-banner" style={{backgroundColor: image[idx].color}}>
          
          <div className="main-banner-container">
            <div className="image-text">
              <div className="image-text-top">
              <h1 className="image-text-top-a" style={{color: image[idx].tcolor1}}>
                Discover the world's top designers & creatives
              </h1>
              <p className="image-text-top-b" style={{color: image[idx].tcolor2}}>
                Scribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.
              </p>
              </div>
              <p className="image-credit-text" style={{color: image[idx].tcolor2, height: 5}}>Art by {image[idx].author}</p>
            </div>
            <div className="image-container">
                <img src={image[idx].img} className='main-page-img' />
            </div>
          </div>
        </div>
        <div className="main-content">

          <ul>
              {images}
          </ul>
       
        </div>
      </div>
    )
  }
}



export default LandingPage;
