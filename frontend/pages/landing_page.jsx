import React from 'react';
import { Link } from 'react-router-dom';
import { image } from './images';
import { connect } from 'react-redux';

import PostIndex from '../components/posts/post_index';
import {fetchPosts} from '../reducers/posts/posts_actions';
import { toggleLoader } from '../reducers/ui/loader_action';
import Errors from '../components/errors/errors';


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.idx = 0;
    this.getImage = this.getImage.bind(this);
  }

  componentDidMount(){
    this.props.fetchPosts();
    this.idx= this.getImage()
    this.props.toggleLoader()
    setTimeout(()=>{this.props.toggleLoader()}, 500);
}


  getImage(){
    return(Math.floor(Math.random()*5))
  }

  render(){

    let {posts} = this.props;

    return (
      <div className="main-page-container">
           <div className="NAV-BAR">
            <a href="https://www.linkedin.com/in/lam-vu-4b49a5117/">
              <i id="linkedin" className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/LamVu1" target="_blank">
              <i id="github" className="fab fa-github"></i>
            </a>
            <a href="https://angel.co/lam-vu-2" target="_blank">
              <i id="angellist" className="fab fa-angellist"></i>
            </a>     
		      </div>
       
        <div className="main-banner" style={{backgroundColor: image[this.idx].color}}>
          
          <div className="main-banner-container">
              <div className="image-text">
                  <div className="image-text-top">
                      <h1 className="image-text-top-a" style={{color: image[this.idx].tcolor1}}>
                        Discover the world's top designers & creatives
                      </h1>
                      <p className="image-text-top-b" style={{color: image[this.idx].tcolor2}}>
                        Scribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.
                      </p>
                  </div>
                  <p className="image-credit-text" style={{color: image[this.idx].tcolor2}}>Art by {image[this.idx].author}</p>
              </div>
              <div className="image-container">
                  <img src={image[this.idx].img} className='main-page-img'/>
              </div>
          </div>
        </div>
        <div className="main-content">

            < PostIndex className="Post-Index"
                posts= {posts}
            />
      
        </div>
      </div>
    )
  }
}



const mapStateToProps = state =>{

  return({
    posts: Object.values(state.entities.posts),
    error: state.errors.follow


  })
}
const mapDispatchToProps = dispatch => {
  
  return({
    fetchPosts: () => dispatch( fetchPosts()),
    toggleLoader: () => dispatch(toggleLoader())
    }
  )
}

export default connect(mapStateToProps,  mapDispatchToProps)(LandingPage);

